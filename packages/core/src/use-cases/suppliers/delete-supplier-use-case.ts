import type {ISuppliesRepository} from '../../interfaces'
type Request = {
  supplierId: string
}
export class DeleteSupplierUseCase{
  private readonly supplierRepository: ISuppliesRepository
  constructor(supplierRepository: ISuppliesRepository){
    this.supplierRepository = supplierRepository
  }
  async execute({supplierId}:Request){
    const supplier = await this.supplierRepository.findById(supplierId)
    if(!supplier) throw new Error("Fornecedor não encontrado")
    await this.supplierRepository.delete(supplierId)
  }
}
