import type { ProductDto } from "../../dto";

import type { IProductsRepository } from "../../interfaces";
type Request = {
  productDto: Partial<ProductDto>
  productId: string
}
export class UpdateProductUseCase{
  private readonly productsRepository: IProductsRepository
  constructor(productsRepository:IProductsRepository){
    this.productsRepository = productsRepository
  }
  async execute({productId,productDto}:Request){
    const product = await this.productsRepository.findById(productId)
    if(!product) throw new Error("produto nao encontrado")
    const updatedProduct = product.update(productDto)
    await this.productsRepository.update(updatedProduct)
    return productId
  }
}
