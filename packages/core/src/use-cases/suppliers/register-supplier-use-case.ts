import { Supplier } from "../../domain";
import type { SupplierDto } from "../../dto";
import type { ISuppliesRepository } from "../../interfaces";
type Request = {
  supplierDto: SupplierDto;
};
export class RegisterSupplierUseCase {
  private readonly suppliersRepository: ISuppliesRepository;
  constructor(supplierRepository: ISuppliesRepository) {
    this.suppliersRepository = supplierRepository;
  }
  async execute({ supplierDto }: Request) {
    const supplier = Supplier.create(supplierDto);
    await this.suppliersRepository.add(supplier);
    return supplier.id;
  }
}
