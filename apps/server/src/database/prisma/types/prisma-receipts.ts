import type { Receipt, Product } from "@prisma/client";

export type PrismaReceipt = Receipt & {
  ReceiptProduct: Array<{
    product: Product;
    quantity: number;
  }>;
};
