import type { Supplier } from "../../domain";
export interface ISuppliesRepository {
  findById(id:string): Promise<Supplier | null>
  add(supplier: Supplier): Promise<void>;
  delete(id: string): Promise<void>;
  update(supplier:Supplier): Promise<void>;
  findMany(): Promise<{suppliers: Supplier[]}>;
}
