import type { Receipt, Product, ReceiptProduct } from "@prisma/client";

export type PrismaReceipt = Receipt & {
  ReceiptProduct: Array<ReceiptProduct & {
    product: Product;
  }>;
};

