import { Entity } from "../abstracts";
import type { Product } from "./index";

type ReceiptProductProps = {
  product: Product;
  quantity: number;
};

export class ReceiptProduct extends Entity<ReceiptProductProps> {
  static create(product: Product, quantity: number) {
    return new ReceiptProduct(
      {
        product,
        quantity,
      },
      `${product.id}-${quantity}`, 
    );
  }
  get product(): Product {
    return this.props.product;
  }
  get quantity(): number {
    return this.props.quantity;
  }
}
