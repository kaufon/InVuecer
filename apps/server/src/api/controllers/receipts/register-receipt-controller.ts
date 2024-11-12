import { HTTP_STATUS_CODE } from "@core/constants";
import type { ReceiptDto } from "@core/dto";
import type { IHttp } from "@core/interfaces";
import { RegisterReceiptUseCase } from "@core/use-cases";
import { receiptsRepository } from "apps/server/src/database";
export class RegisterReceiptController {
  async handle(http: IHttp) {
    const receiptDto = http.getBody<ReceiptDto>();
    const useCase = new RegisterReceiptUseCase(receiptsRepository);
    const response = useCase.execute(receiptDto);
    return http.send(response, HTTP_STATUS_CODE.ok);
  }
}
