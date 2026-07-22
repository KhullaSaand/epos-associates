import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { prisma } from "@/lib/prisma"
import { generateOrderNumber } from "@/lib/order-number"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get("session_id")

    if (!sessionId) {
      return NextResponse.json(
        { error: "No session ID provided" },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["shipping_details"],
    })

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment not completed" },
        { status: 400 }
      )
    }

    const existingOrder = await prisma.order.findFirst({
      where: { stripeSessionId: sessionId },
    })

    if (existingOrder) {
      return NextResponse.json({
        orderNumber: existingOrder.orderNumber,
        total: Number(existingOrder.total),
      })
    }

    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId)

    const sessionAny = session as unknown as {
      shipping_details?: {
        name?: string
        phone?: string
        address?: {
          line1?: string
          line2?: string
          city?: string
          state?: string
          postal_code?: string
          country?: string
        }
      }
    }
    const shippingDetails = sessionAny.shipping_details
    const nameParts = (shippingDetails?.name || "Customer").split(" ")
    const firstName = nameParts[0]
    const lastName = nameParts.slice(1).join(" ") || ""

    const orderNumber = await generateOrderNumber()

    const subtotal = lineItems.data.reduce((sum, item) => {
      return sum + (item.amount_subtotal || 0) / 100
    }, 0)

    const order = await prisma.order.create({
      data: {
        orderNumber,
        sessionId: session.client_reference_id || sessionId,
        email: session.customer_email || "",
        phone: shippingDetails?.phone || null,
        firstName,
        lastName,
        company: null,
        address: shippingDetails?.address?.line1 || "",
        address2: shippingDetails?.address?.line2 || null,
        city: shippingDetails?.address?.city || "",
        state: shippingDetails?.address?.state || "",
        zipCode: shippingDetails?.address?.postal_code || "",
        country: shippingDetails?.address?.country || "GB",
        status: "CONFIRMED",
        subtotal: subtotal,
        tax: 0,
        shipping: 0,
        total: (session.amount_total || 0) / 100,
        stripePaymentId: session.payment_intent as string,
        stripeSessionId: sessionId,
        items: {
          create: lineItems.data.map((item) => ({
            productId: "placeholder",
            quantity: item.quantity || 1,
            price: (item.amount_subtotal || 0) / 100 / (item.quantity || 1),
          })),
        },
      },
    })

    return NextResponse.json({
      orderNumber: order.orderNumber,
      total: Number(order.total),
    })
  } catch (error) {
    console.error("Order retrieval error:", error)
    return NextResponse.json(
      { error: "Failed to retrieve order" },
      { status: 500 }
    )
  }
}
