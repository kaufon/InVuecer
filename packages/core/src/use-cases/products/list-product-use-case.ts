import type { IProductsRepository } from "../../interfaces";
import { ApiResponse } from "../../responses/api-response";

export class ListProductUseCase {
  private readonly productRepository: IProductsRepository;
  constructor(productRepository: IProductsRepository) {
    this.productRepository = productRepository;
  }
  async execute() {
    const products = await this.productRepository.findMany();
    return new ApiResponse({ body: products, statusCode: 200 });
  }
}
