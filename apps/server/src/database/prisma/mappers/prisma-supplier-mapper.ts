import { Supplier } from "@core/index";
import type { PrismaSupplier } from "../types";

export class PrismaSupplierMapper {
  toDomain(prismaSupplier: PrismaSupplier): Supplier {
    return Supplier.create({
      id: prismaSupplier.id,
      name: prismaSupplier.name,
      cnpj: prismaSupplier.cnpj,
      email: prismaSupplier.email,
      phone: prismaSupplier.phone,
    });
  }
  toPrisma(supplier: Supplier): PrismaSupplier {
    const supplierDto = supplier.dto;
    return {
      id: supplier.id,
      name: supplierDto.name,
      cnpj: supplierDto.cnpj,
      email: supplierDto.email,
      phone: supplierDto.phone,
    };
  }
}
