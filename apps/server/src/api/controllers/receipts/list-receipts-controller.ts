import { HTTP_STATUS_CODE } from "@core/constants";
import type { IHttp } from "@core/interfaces";
import { ListReceiptsUseCase } from "@core/use-cases";
import { receiptsRepository } from "apps/server/src/database";
export class ListReceiptsController {
  async handle(http: IHttp) {
    const useCase = new ListReceiptsUseCase(receiptsRepository);
    const response = await useCase.execute();
    return http.send(response, HTTP_STATUS_CODE.ok);
  }
}
