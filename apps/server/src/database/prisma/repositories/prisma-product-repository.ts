import type { Product } from "@core/domain";
import type { IProductsRepository } from "@core/interfaces";
import { PrismaProductsMapper } from "../mappers";
import { prisma } from "../prisma-client";
import { PrismaError } from "../prisma-error";

export class PrismaProductRepository implements IProductsRepository {
  private readonly mapper: PrismaProductsMapper = new PrismaProductsMapper();

  async delete(productId: string): Promise<void> {
    try {
      
      const prismaProduct = await prisma.product.findUnique({
        where: { id: productId },
      });

      if (prismaProduct) {
        
        await prisma.receiptProduct.deleteMany({
          where: { productId },
        });

        
        await prisma.receipt.deleteMany({
          where: {
            ReceiptProduct: {
              none: {}, 
            },
          },
        });

        
        await prisma.product.delete({
          where: { id: productId },
        });
      }
    } catch (error) {
      throw new PrismaError(error);
    }
  }
  async findMany(): Promise<Product[]> {
    try {
      const prismaProducts = await prisma.product.findMany();
      const products = prismaProducts.map((product) =>
        this.mapper.toDomain(product),
      );
      return products;
    } catch (error) {
      throw new PrismaError(error);
    }
  }
  async findById(productId: string): Promise<Product | null> {
    try {
      const prismaProduct = await prisma.product.findUnique({
        where: {
          id: productId,
        },
      });
      if (!prismaProduct) return null;
      return this.mapper.toDomain(prismaProduct);
    } catch (error) {
      throw new PrismaError(error);
    }
  }
  async add(product: Product): Promise<void> {
    try {
      const prismaProduct = this.mapper.toPrisma(product);
      await prisma.product.create({
        data: prismaProduct,
      });
    } catch (error) {
      throw new PrismaError(error);
    }
  }
  async update(product: Product): Promise<void> {
    try {
      const prismaProduct = this.mapper.toPrisma(product);
      await prisma.product.update({
        where: {
          id: prismaProduct.id,
        },

        data: {
          name: prismaProduct.name,
          supplierId: prismaProduct.supplierId,
          price: prismaProduct.price,
          description: prismaProduct.description,
        },
      });
    } catch (error) {
      throw new PrismaError(error);
    }
  }
}
