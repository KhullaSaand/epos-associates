import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { session_id, orderNumber } = body

    if (!session_id || !orderNumber) {
      return NextResponse.json({ success: false }, { status: 400 })
    }

    const existingOrder = await prisma.order.findFirst({
      where: { stripeSessionId: session_id },
    })

    if (existingOrder) {
      return NextResponse.json({ success: true, orderNumber: existingOrder.orderNumber })
    }

    await prisma.order.create({
      data: {
        orderNumber,
        sessionId: session_id,
        email: "",
        firstName: "Customer",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "GB",
        status: "CONFIRMED",
        subtotal: 0,
        tax: 0,
        shipping: 0,
        total: 0,
        stripeSessionId: session_id,
      },
    })

    return NextResponse.json({ success: true, orderNumber })
  } catch (error) {
    console.error("Order save error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
