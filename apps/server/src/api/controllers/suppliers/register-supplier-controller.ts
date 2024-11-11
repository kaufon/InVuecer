import { HTTP_STATUS_CODE } from "@core/constants";
import type { SupplierDto } from "@core/dto";
import type { IHttp } from "@core/interfaces";
import { RegisterSupplierUseCase } from "@core/use-cases";
import { suppliersRepository } from "apps/server/src/database";

export class RegisterSupplierController {
  async handle(http: IHttp) {
    const supplierDto = http.getBody<SupplierDto>();
    const useCase = new RegisterSupplierUseCase(suppliersRepository);
    const supplierId = await useCase.execute({ supplierDto });
    return http.send({ supplierId }, HTTP_STATUS_CODE.ok);
  }
}
