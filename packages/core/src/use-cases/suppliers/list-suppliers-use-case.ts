import type { ISuppliesRepository } from "../../interfaces";
import { ApiResponse } from "../../responses/api-response";
export class ListSuppliersUseCase {
  private readonly suppliersReposity: ISuppliesRepository;
  constructor(suppliersReposity: ISuppliesRepository) {
    this.suppliersReposity = suppliersReposity;
  }
  async execute() {
    const { suppliers } = await this.suppliersReposity.findMany();
    return new ApiResponse({ body: suppliers, statusCode: 200 });
  }
}
