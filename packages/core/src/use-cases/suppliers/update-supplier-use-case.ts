import type { SupplierDto } from "../../dto";
import type { ISuppliesRepository } from "../../interfaces";
type Request = {
  supplierDto: Partial<SupplierDto>;
  supplierId: string;
};
export class UpdateSupplierUseCase {
  private readonly supplierRepository: ISuppliesRepository;
  constructor(supplierRepository: ISuppliesRepository) {
    this.supplierRepository = supplierRepository;
  }
  async execute({ supplierId, supplierDto }: Request) {
    const supplier = await this.supplierRepository.findById(supplierId);
    if (!supplier) throw new Error("Fornecedor não encontrado");

    const updatedSupplier = supplier.update(supplierDto);
    await this.supplierRepository.update(updatedSupplier);
    return supplierId
  }
}
