import  { Receipt } from "../../domain";
import type { ReceiptDto } from "../../dto";
import type { IReceiptsRepository } from "../../interfaces";

export class RegisterReceiptUseCase {
  private readonly receiptRepository: IReceiptsRepository;
  constructor(receiptRepository: IReceiptsRepository) {
    this.receiptRepository = receiptRepository;
  }
  async execute(receiptDto: ReceiptDto) {
    const receipt = Receipt.create(receiptDto);
    await this.receiptRepository.add(receipt)
    return receipt.id
  }
}
