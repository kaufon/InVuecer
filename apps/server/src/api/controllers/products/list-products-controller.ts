import { HTTP_STATUS_CODE } from "@core/constants";
import { IHttp } from "@core/interfaces";
import { ListProductUseCase } from "@core/use-cases";
import { productsRepository } from "apps/server/src/database";

export class ListProductsController {
  async handle(http: IHttp) {
    const useCase = new ListProductUseCase(productsRepository);
    const response = await useCase.execute();
    return http.send(response, HTTP_STATUS_CODE.ok);
  }
}
