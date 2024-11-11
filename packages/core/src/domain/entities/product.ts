import type { ProductDto } from "../../dto";
import { Entity } from "../abstracts";

type ProductProps = {
  name: string;
  price: number;
  description: string;
  supplierId: string;
  quantity?:number
};
export class Product extends Entity<ProductProps> {
  static create(dto: ProductDto) {
    return new Product(
      {
        name: dto.name,
        price: dto.price,
        description: dto.description,
        supplierId: dto.supplierId,
        quantity: dto.quantity
      },
      dto.id,
    );
  }
  update(partialDto: Partial<ProductDto>) {
    return Product.create({
      ...this.dto,
      ...partialDto,
    })
  }
  get name():string{
    return this.props.name
  }
  get price():number{
    return this.props.price
  }
  get description():string{
    return this.props.description
  }
  get supplierId():string{
    return this.props.supplierId
  }
  get dto():ProductDto{
    return {
      name: this.props.name,
      price: this.props.price,
      description: this.props.description,
      supplierId: this.props.supplierId,
    }
  }
}
