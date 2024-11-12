import type {Receipt} from '../../domain'
export interface IReceiptsRepository{
  add(receipt: Receipt): Promise<void>
  delete(receiptId:string): Promise<void>
  findByID(receiptId:string): Promise<Receipt | null>
  findMany(): Promise<Receipt[]>
  update(receipt:Receipt): Promise<void>
}
