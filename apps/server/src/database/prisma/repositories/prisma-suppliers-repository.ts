import type { ISuppliesRepository } from "@core/interfaces";
import { PrismaSupplierMapper } from "../mappers/prisma-supplier-mapper";
import type { Supplier } from "@core/domain";
import { prisma } from "../prisma-client";
import { PrismaError } from "../prisma-error";

export class PrismaSuppliersRepositoy implements ISuppliesRepository {
  private readonly mapper: PrismaSupplierMapper = new PrismaSupplierMapper();

  async add(supplier: Supplier): Promise<void> {
    try {
      const prismaSupplier = this.mapper.toPrisma(supplier);
      await prisma.supplier.create({
        data: {
          id: prismaSupplier.id,
          name: prismaSupplier.name,
          cnpj: prismaSupplier.cnpj,
          email: prismaSupplier.email,
          phone: prismaSupplier.phone,
        },
      });
    } catch (error) {
      throw new PrismaError(error);
    }
  }
  async findById(id: string): Promise<Supplier | null> {
    try {
      const prismaSupplier = await prisma.supplier.findUnique({
        where: {
          id: id,
        },
      });
      if (!prismaSupplier) return null;
      return this.mapper.toDomain(prismaSupplier);
    } catch (error) {
      throw new PrismaError(error);
    }
  }
  async delete(id: string): Promise<void> {
    try {
      const prismaSupplier = await prisma.supplier.findUnique({
        where: {
          id: id,
        },
      });
      if (prismaSupplier) {
        await prisma.supplier.delete({
          where: {
            id: id,
          },
        });
      }
    } catch (error) {
      throw new PrismaError(error);
    }
  }
  async update(supplier: Supplier): Promise<void> {
    try {
      const prismaSupplier = this.mapper.toPrisma(supplier);
      await prisma.supplier.update({
        where: {
          id: supplier.id,
        },
        data: {
          name: prismaSupplier.name,
          cnpj: prismaSupplier.cnpj,
          email: prismaSupplier.email,
          phone: prismaSupplier.phone,
        },
      });
    } catch (error) {
      throw new PrismaError(error);
    }
  }
  async findMany(): Promise<{ suppliers: Supplier[] }> {
    try {
      const prismaSuppliers = await prisma.supplier.findMany();
      const suppliers = prismaSuppliers.map((prismaSupplier) =>
        this.mapper.toDomain(prismaSupplier),
      );
      return {
        suppliers,
      };
    } catch (error) {
      throw new PrismaError(error);
    }
  }
}
