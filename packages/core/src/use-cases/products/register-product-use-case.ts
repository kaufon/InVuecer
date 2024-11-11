import { Product } from "../../domain";
import type { ProductDto } from "../../dto";
import type { IProductsRepository } from "../../interfaces";
type Request = {
  productDto: ProductDto;
};
export class RegisterClientUseCase {
  private readonly productRepository: IProductsRepository;
  constructor(productRepository: IProductsRepository) {
    this.productRepository = productRepository;
  }
  async execute({productDto}:Request){
    const product = Product.create(productDto)
    await this.productRepository.add(product)
    return product.id
  }
}
