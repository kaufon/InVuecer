import { Receipt } from "@core/domain";
import type { Prisma } from "@prisma/client";
import type { PrismaReceipt } from "../types";

export class PrismaReceiptsMapper {
  toDomain(prismaReceipt: PrismaReceipt): Receipt {
    return Receipt.create({
      id: prismaReceipt.id,
      consumerCpf: prismaReceipt.consumerCpf,
      price: prismaReceipt.price,
      products: prismaReceipt.Products.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
      })),
    });
  }
  toPrisma(receipt: Receipt): Prisma.ReceiptCreateInput {
    const receiptDto = receipt.dto;
    return {
      id: receipt.id,
      consumerCpf: receiptDto.consumerCpf,
      price: receiptDto.price,
      products: {
        connect: receipt.products.map((product) => ({ id: product.id })),
      }
    };
  }
}
