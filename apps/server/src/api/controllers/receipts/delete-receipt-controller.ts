import { HTTP_STATUS_CODE } from "@core/constants";
import type { IHttp } from "@core/interfaces";
import { DeleteReceiptUseCase } from "@core/use-cases";
import { receiptsRepository } from "apps/server/src/database";
type Body = {
  receiptId: string;
};
export class DeleteReceiptController {
  async handle(http: IHttp) {
    const { receiptId } = http.getBody<Body>();
    const useCase = new DeleteReceiptUseCase(receiptsRepository);
    const reponse = useCase.execute({ receiptId });
    return http.send(reponse,HTTP_STATUS_CODE.ok)
  }
}
