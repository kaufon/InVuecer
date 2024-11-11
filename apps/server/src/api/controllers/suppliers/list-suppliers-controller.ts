import { HTTP_STATUS_CODE } from "@core/constants";
import type { IHttp } from "@core/interfaces";
import { ListSuppliersUseCase } from "@core/use-cases";
import { suppliersRepository } from "apps/server/src/database";
export class ListSuppliersController {
  async handle(http: IHttp) {
    const useCase = new ListSuppliersUseCase(suppliersRepository);
    const response = await useCase.execute();
    return http.send(response, HTTP_STATUS_CODE.ok);
  }
}
