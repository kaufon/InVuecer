import { Entity } from "../abstracts/";
import type { SupplierDto } from "../../dto";
type SupplierProps = {
  name: string;
  email: string;
  phone: string;
  cnpj: string;
};
export class Supplier extends Entity<SupplierProps> {
  static create(dto: SupplierDto) {
    return new Supplier(
      {
        name: dto.name,
        email: dto.email,
        phone: dto.phone,
        cnpj: dto.cnpj,
      },
      dto.id,
    );
  }
  update(partialDto: Partial<SupplierDto>) {
    return Supplier.create({
      ...this.dto,
      ...partialDto,
    });
  }
  get dto(): SupplierDto {
    return {
      id: this.id,
      name: this.props.name,
      email: this.props.email,
      cnpj: this.props.cnpj,
      phone: this.props.phone,
    };
  }
  get name() {
    return this.props.name;
  }
  get email() {
    return this.props.email;
  }
  get phone() {
    return this.props.phone;
  }
  get cnpj() {
    return this.props.cnpj;
  }
}
