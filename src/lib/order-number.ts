import { prisma } from "@/lib/prisma"

export async function generateOrderNumber(): Promise<string> {
  const today = new Date()
  const datePrefix = today.toISOString().slice(2, 10).replace(/-/g, "")

  const lastOrder = await prisma.order.findFirst({
    where: {
      orderNumber: {
        startsWith: `EA-${datePrefix}`,
      },
    },
    orderBy: {
      orderNumber: "desc",
    },
  })

  let sequence = 1
  if (lastOrder) {
    const lastSequence = parseInt(lastOrder.orderNumber.split("-")[2], 10)
    sequence = lastSequence + 1
  }

  return `EA-${datePrefix}-${sequence.toString().padStart(4, "0")}`
}
