import type { IReceiptsRepository } from "../../interfaces";
type Request = {
  receiptId: string
}
export class DeleteReceiptUseCase {
  private readonly receiptsRepository: IReceiptsRepository;
  constructor(receiptRepository: IReceiptsRepository) {
    this.receiptsRepository = receiptRepository;
  }
  async execute({receiptId}:Request) {
    const receipt = await this.receiptsRepository.findByID(receiptId)
    if(!receipt) throw new Error("Recibo nao encontrado")
    await this.receiptsRepository.delete(receiptId)
    return null
  }
}
