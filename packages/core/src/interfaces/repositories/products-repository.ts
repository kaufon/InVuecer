import type { Product } from "../../domain";

export interface IProductsRepository {
  add(product: Product): Promise<void>
  findMany(): Promise<Product[]>
  findById(productId:string): Promise<Product | null>
  delete(productId:string): Promise<void>
  update(product:Product): Promise<void>
}
