export type ReceiptDto = {
  id?: string;
  products: Array<{
    id: string;
    name?: string;
  }>;
  consumerCpf: string | null;
  price: number;
};
