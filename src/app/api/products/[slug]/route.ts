import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params

    const product = await prisma.product.findUnique({
      where: { slug },
      include: { category: true },
    })

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: Number(product.price),
      comparePrice: product.comparePrice ? Number(product.comparePrice) : null,
      category: product.category.name,
      categorySlug: product.category.slug,
      sku: product.sku,
      stock: product.stock,
      description: product.description,
      features: product.features,
      specs: product.specs,
      image: product.images[0] || null,
      productType: product.productType,
      softwareType: product.softwareType,
      monthlyPrice: product.monthlyPrice ? Number(product.monthlyPrice) : null,
      yearlyPrice: product.yearlyPrice ? Number(product.yearlyPrice) : null,
      hasSubscription: product.hasSubscription,
      trialDays: product.trialDays,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}
