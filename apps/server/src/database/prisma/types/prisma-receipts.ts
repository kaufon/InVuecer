import type { Receipt } from "@prisma/client";

export type PrismaReceipt = Receipt & {
  Product?: { name: string };
};
