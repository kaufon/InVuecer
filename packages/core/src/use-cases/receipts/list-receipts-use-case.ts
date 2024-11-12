import type { IReceiptsRepository } from "../../interfaces";
import { ApiResponse } from "../../responses/api-response";

export class ListReceiptsUseCase{
  private readonly receiptsRepository: IReceiptsRepository
  constructor(receiptRepository: IReceiptsRepository){
    this.receiptsRepository = receiptRepository
  }
  async execute(){
    const receipts = await this.receiptsRepository.findMany()
    return new ApiResponse({body:receipts,statusCode:200})

  }
}
