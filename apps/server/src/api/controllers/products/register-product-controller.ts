import type { ProductDto } from "@core/dto";
import type { IHttp } from "@core/interfaces";
import { RegisterClientUseCase } from "@core/use-cases";
import { productsRepository } from "apps/server/src/database";
export class RegisterProductController{
  async handle(http: IHttp){
    const productDto = http.getBody<ProductDto>()
    const usecase = new RegisterClientUseCase(productsRepository)
    const response = await usecase.execute({ productDto })
    return http.send(response)
  }
}
