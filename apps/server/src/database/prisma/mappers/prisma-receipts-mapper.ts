import { Receipt } from "@core/domain";
import type { PrismaReceipt } from "../types";

export class PrismaReceiptsMapper {
  toDomain(prismaReceipt: PrismaReceipt) {
    return Receipt.create({
      id: prismaReceipt.id,

      products: {
        id: prismaReceipt.products_id,
        name: prismaReceipt.Product?.name
      },
      consumerCpf: prismaReceipt.consumerCpf,
      price: prismaReceipt.price,
    });
  }
}
