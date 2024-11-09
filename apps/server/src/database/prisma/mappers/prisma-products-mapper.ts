import { Product } from "@core/index";
import type { PrismaProduct } from "../types";

export class PrismaProductsMapper {
  toDomain(prismaProduct: PrismaProduct): Product {
    return Product.create({
      id: prismaProduct.id,
      name: prismaProduct.name,
      description: prismaProduct.description,
      price: prismaProduct.price,
      supplierId: prismaProduct.supplierId,
    });
  }
  toPrisma(product: Product): PrismaProduct {
    const productDto = product.dto;
    return {
      id: product.id,
      name: productDto.name,
      description: productDto.description,
      supplierId: productDto.supplierId,
      price: productDto.price,
    };
  }
}
