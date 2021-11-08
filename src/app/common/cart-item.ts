import {Product} from '../models/Product';

export class CartItem {
  id: string;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;

  constructor(product: Product) {
    this.id = product._id;
    this.name = product.name;
    this.imageUrl = product.imageUrl;
    this.unitPrice = product.price;
    this.quantity = 1;
  }

}
