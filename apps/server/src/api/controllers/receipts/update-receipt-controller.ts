import { HTTP_STATUS_CODE } from "@core/constants";
import { ReceiptDto } from "@core/dto";
import { IHttp } from "@core/interfaces";
import { UpdateReceiptUseCase } from "@core/use-cases";
import { receiptsRepository } from "apps/server/src/database";
type RouteParams = {
  receiptId:string
}
export class UpdateReeceiptController{
  async handle(http:IHttp){
    const receiptDto = http.getBody<Partial<ReceiptDto>>()
    const {receiptId} = http.getRouteParams<RouteParams>()
    const useCase = new UpdateReceiptUseCase(receiptsRepository)
    const response = useCase.execute({receiptId,receiptDto})
    http.send(response,HTTP_STATUS_CODE.ok)
  }
}
