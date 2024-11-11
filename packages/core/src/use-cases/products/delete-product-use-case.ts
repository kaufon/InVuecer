import type { IProductsRepository } from "../../interfaces";

export class DeleteProductUseCase {
  private readonly productRepository: IProductsRepository
  constructor(productsRepository: IProductsRepository){
    this.productRepository = productsRepository
  }
  async execute(productId: string){
    const product = await this.productRepository.findById(productId)
    if(!product) throw new Error("Produto nao encontrado")
    await this.productRepository.delete(productId)
    return null
  }
}
