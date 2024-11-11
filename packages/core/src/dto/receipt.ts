import type { ProductDto } from "./product-dto";

export interface ReceiptDto {
  id?: string;
  products: ProductDto[]
  consumerCpf: string | null;
  price: number;
}

