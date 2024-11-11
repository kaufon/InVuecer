import { HTTP_STATUS_CODE } from "@core/constants";
import type { SupplierDto } from "@core/dto";
import type { IHttp } from "@core/interfaces";
import { UpdateSupplierUseCase } from "@core/use-cases";
import { suppliersRepository } from "apps/server/src/database";
type RouteParams = {
  supplierId: string;
};
export class UpdateSupplierController {
  async handle(http: IHttp) {
    const { supplierId } = http.getRouteParams<RouteParams>();
    const supplierDto = http.getBody<Partial<SupplierDto>>();
    const useCase = new UpdateSupplierUseCase(suppliersRepository);
    const response = await useCase.execute({ supplierDto, supplierId });
    return http.send(response, HTTP_STATUS_CODE.ok);
  }
}
