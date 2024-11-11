import type { Receipt, Product } from "@prisma/client";

export type PrismaReceipt = Receipt & {
  Products: Product[]
};
