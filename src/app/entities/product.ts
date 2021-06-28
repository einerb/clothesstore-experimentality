export class Product {
  public id: string;
  public title: string;
  public price: number;
  public thumbnail: string;
  public original_price: number;

  constructor(item?: Product) {
    this.id = item && item.id ? item.id : '';
    this.title = item && item.title ? item.title : '';
    this.price = item && item.price ? item.price : 0;
    this.thumbnail = item && item.thumbnail ? item.thumbnail : '';
    this.original_price = item && item.original_price ? item.original_price : 0;
  }
}
