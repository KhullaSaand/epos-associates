import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: { isActive: true },
      include: { category: true },
      orderBy: { createdAt: "desc" },
    })

    const formatted = products.map((p) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      price: Number(p.price),
      comparePrice: p.comparePrice ? Number(p.comparePrice) : null,
      category: p.category.name,
      description: p.shortDesc || p.description.slice(0, 100),
      stock: p.stock,
      image: p.images[0] || null,
      isFeatured: p.isFeatured,
    }))

    return NextResponse.json({ products: formatted })
  } catch (error) {
    return NextResponse.json({ products: [], error: "Failed to fetch products" }, { status: 500 })
  }
}
