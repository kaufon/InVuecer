import type { IHttp } from "@core/interfaces";
import { DeleteSupplierUseCase } from "@core/use-cases";
import { suppliersRepository } from "apps/server/src/database";

type Body = {
  supplierId: string;
};
export class DeleteSupplierController {
  async handle(http: IHttp) {
    const supplierId = http.getBody<Body>();
    const useCase = new DeleteSupplierUseCase(suppliersRepository);
    await useCase.execute(supplierId);
    return http.send(null);
  }
}
