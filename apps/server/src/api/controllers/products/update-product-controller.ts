import { HTTP_STATUS_CODE } from "@core/constants";
import type { ProductDto } from "@core/dto";
import type { IHttp } from "@core/interfaces";
import { UpdateProductUseCase } from "@core/use-cases";
import { productsRepository } from "apps/server/src/database";
type RouteParams = {
  productId: string
}
export class UpdateProductController{
  async handle(http:IHttp){
  const productDto = http.getBody<ProductDto>()
  const {productId} = http.getRouteParams<RouteParams>()
  const useCase = new UpdateProductUseCase(productsRepository)
  const response = await useCase.execute({productId,productDto})
  return http.send(response,HTTP_STATUS_CODE.ok)
  }
}
