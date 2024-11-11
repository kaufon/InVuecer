import { HTTP_STATUS_CODE } from "@core/constants";
import type { IHttp } from "@core/interfaces";
import { DeleteProductUseCase } from "@core/use-cases";
import { productsRepository } from "apps/server/src/database";
type Body = {
  productId: string
}
export class DeleteProductController {
  async handle(http:IHttp){
    const {productId} = http.getBody<Body>()
    const useCase = new DeleteProductUseCase(productsRepository)
    const response = await useCase.execute(productId)
    http.send(response,HTTP_STATUS_CODE.ok)
  }
}
