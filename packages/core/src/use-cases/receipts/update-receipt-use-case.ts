import { ReceiptDto } from "../../dto";
import { IReceiptsRepository } from "../../interfaces";
type Request = {
  receiptDto: Partial<ReceiptDto>
  receiptId:string
}
export class UpdateReceiptUseCase {
  private readonly receiptsRepository: IReceiptsRepository
  constructor(receiptsRepository: IReceiptsRepository){
   this.receiptsRepository = receiptsRepository 
  }
  async execute({receiptDto,receiptId}:Request){
    const receipt = await this.receiptsRepository.findByID(receiptId)
    if(!receipt) throw new Error("recbi nao encontrado")
    const updatedReceipt = receipt.update(receiptDto)
    await this.receiptsRepository.update(updatedReceipt)
    return receiptId
  }

}
