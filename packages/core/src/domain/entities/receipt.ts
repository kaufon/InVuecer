import { Product } from "./product";
import { Entity } from "../abstracts";
import type { ReceiptDto } from "../../dto/receipt";

type ReceiptProps = {
  products: Array<{
    id: string;
    name?: string;
    price?: number;
  }>;
  consumerCpf: string | null;
  price: number;
};

export class Receipt extends Entity<ReceiptProps> {
  static create(dto: ReceiptDto) {
    return new Receipt(
      {
        products: dto.products,
        consumerCpf: dto.consumerCpf,
        price: dto.price,
      },
      dto.id,
    );
  }
  update(partialDto: Partial<ReceiptDto>) {
    return Receipt.create({
      ...this.dto,
      ...partialDto,
    });
  }
  get products() {
    return this.props.products;
  }
  get consumerCpf(): string | null {
    return this.props.consumerCpf;
  }
  get totalPrice(): number {
    return this.props.price;
  }
  get dto(): ReceiptDto {
    return {
      products: this.props.products,
      price: this.totalPrice,
      consumerCpf: this.props.consumerCpf,
    };
  }
}
