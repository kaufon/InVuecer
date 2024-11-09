type PaginationResponseProps<Item> = {
  items: Item[];
  itemCount: number;
};

export class PaginationResponse<Item> {
  readonly items: Item[];
  readonly itemCount: number;

  constructor({ items, itemCount }: PaginationResponseProps<Item>) {
    this.items = items;
    this.itemCount = itemCount;
  }
}
