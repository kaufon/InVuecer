import { Receipt } from "@core/domain";
import type { PrismaReceipt } from "../types";
import type { Prisma } from "@prisma/client";

export class PrismaReceiptsMapper {
  toDomain(prismaReceipt: PrismaReceipt): Receipt {
    return Receipt.create({
      id: prismaReceipt.id,
      consumerCpf: prismaReceipt.consumerCpf,
      price: prismaReceipt.price,
      products: prismaReceipt.ReceiptProduct.map((receiptProduct) => ({
        id: receiptProduct.product.id,
        name: receiptProduct.product.name,
        description: receiptProduct.product.description,
        supplierId: receiptProduct.product.supplierId,
        price: receiptProduct.product.price,
        quantity: receiptProduct.quantity,
      })),
    });
  }

  toPrisma(receipt: Receipt): Prisma.ReceiptCreateInput {
    const receiptDto = receipt.dto; 

    return {
      id: receipt.id,
      consumerCpf: receiptDto.consumerCpf,
      price: receiptDto.price,
      ReceiptProduct: {
        create: receiptDto.products.map((product) => {
          if (!product.id || product.quantity === undefined) {
            throw new Error('Product ID or quantity is missing');
          }

          return {
            product: {
              connect: { id: product.id },  // Connecting to existing products by ID
            },
            quantity: product.quantity, // Directly mapping quantity
          };
        }),
      },
    };
  }
}

