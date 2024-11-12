import { Product } from "./product";
import { Entity } from "../abstracts";
import type { ReceiptDto } from "../../dto/receipt";
import { ReceiptProduct } from "./receiptProduct";
import type { ProductDto } from "@core/dto";

type ReceiptProps = {
  products: ReceiptProduct[];
  consumerCpf: string | null;
  price: number;
};

export class Receipt extends Entity<ReceiptProps> {
  static create(dto: ReceiptDto) {
    const receiptProdcts = dto.products.map((productDto) =>
      ReceiptProduct.create(
        new Product(
          {
            name: productDto.name,
            price: productDto.price,
            description: productDto.description,
            supplierId: productDto.supplierId,
          },
          productDto.id,
        ),
        productDto.quantity || 1,
      ),
    );
    return new Receipt(
      {
        products: receiptProdcts,
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
      products: this.props.products.map((receiptProduct) => ({
        id: receiptProduct.product.id,
        name: receiptProduct.product.name,
        description: receiptProduct.product.description,
        price: receiptProduct.product.price,
        supplierId: receiptProduct.product.supplierId,
        quantity: receiptProduct.quantity,
      })) as ProductDto[],
      price: this.totalPrice,
      consumerCpf: this.props.consumerCpf,
    };
  }
}
