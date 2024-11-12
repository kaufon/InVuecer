import { IReceiptsRepository } from "@core/interfaces";
import { PrismaReceiptsMapper } from "../mappers";
import { prisma } from "../prisma-client";
import { PrismaError } from "../prisma-error";
import { Receipt } from "@core/domain";
export class PrismaReceiptRepository implements IReceiptsRepository {
  private readonly mapper: PrismaReceiptsMapper = new PrismaReceiptsMapper();

  async add(receipt: Receipt): Promise<void> {
    try {
      const prismaReceipt = this.mapper.toPrisma(receipt);
      await prisma.receipt.create({
        data: {
          ...prismaReceipt,
          ReceiptProduct: {
            create: prismaReceipt.ReceiptProduct?.create,
          },
        },
      });
    } catch (error) {
      throw new PrismaError(error);
    }
  }
  async delete(receiptId: string): Promise<void> {
    try {
      const prismaReceipt = await prisma.receipt.findUnique({
        where: {
          id: receiptId,
        },
      });
      if (prismaReceipt) {
        await prisma.receipt.delete({
          where: {
            id: receiptId,
          },
        });
      }
    } catch (error) {
      throw new PrismaError(error);
    }
  }
  async findByID(receiptId: string): Promise<Receipt | null> {
    try {
      const prismaReceipt = await prisma.receipt.findUnique({
        where: {
          id: receiptId,
        },
        include: {
          ReceiptProduct: {
            include: {
              product: true,
            },
          },
        },
      });
      if (!prismaReceipt) return null;
      return this.mapper.toDomain(prismaReceipt);
    } catch (error) {
      throw new PrismaError(error);
    }
  }
  async findMany(): Promise<Receipt[]> {
    try {
      const prismaReceipts = await prisma.receipt.findMany({
        include: {
          ReceiptProduct: {
            include: {
              product: true,
            },
          },
        },
      });
      const receipts = prismaReceipts.map((receipt) =>
        this.mapper.toDomain(receipt),
      );
      return receipts;
    } catch (error) {
      throw new PrismaError(error);
    }
  }
  async update(receipt: Receipt): Promise<void> {
    try {
      const prismaReceipt = this.mapper.toPrisma(receipt);
      await prisma.receipt.update({
        where: { id: prismaReceipt.id },
        data: {
          price: prismaReceipt.price,
          consumerCpf: prismaReceipt.consumerCpf,
          ReceiptProduct: prismaReceipt.ReceiptProduct,
        },
      });
    } catch (error) {
      throw new PrismaError(error);
    }
  }
}
