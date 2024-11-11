import { Receipt } from "@core/domain";
import type { PrismaReceipt } from "../types";

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

  toPrisma(receipt: Receipt): PrismaReceipt {
    const receiptDto = receipt.dto;

    return {
      id: receipt.id,
      consumerCpf: receiptDto.consumerCpf,
      price: receiptDto.price,
      ReceiptProduct: receiptDto.products.map((product) => {
        if (!product.id || product.quantity === undefined) {
          throw new Error('Product ID or quantity is missing');
        }

        return {
          product: {
            name: product.name,
            id: product.id, 
            price: product.price,
            description: product.description,
            supplierId: product.supplierId,
          },
          quantity: product.quantity, 
        };
      }),
    };
  }
}

