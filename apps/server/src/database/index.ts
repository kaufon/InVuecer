import { PrismaProductRepository } from "./prisma/repositories/prisma-product-repository";
import { PrismaSuppliersRepositoy } from "./prisma/repositories/prisma-suppliers-repository";

export const suppliersRepository = new PrismaSuppliersRepositoy()
export const productsRepository = new PrismaProductRepository()
