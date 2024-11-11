export type ReceiptDto = {
  id?: string;
  products: Array<{
    id: string;
    name?: string;
    price?: number;
  }>;
  consumerCpf: string | null;
  price: number;
};
