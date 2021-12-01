import { Component, OnInit } from '@angular/core';
import {Product} from '../models/Product';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';
import {CartService} from '../services/cart.service';
import {CartItem} from '../common/cart-item';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public items: Product[];
  public categories: any[];
  public showAlert: boolean;

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService
  ) {
    this.showAlert = false;
  }

  ngOnInit() {

    this.categories = [
      {
        name: 'fruits and vegetables',
        products: []
      },
      {
        name: 'food cupboard',
        products: []
      },
      {
        name: 'meats',
        products: []
      },
      {
        name: 'naija food',
        products: []
      },
    ];

    this.categories.forEach((category, i) => {
      this.productService.getAllCategories(category.name, true, 4)
        .subscribe(data => {
          category.products = data;
        });
    });
  }

  addToCart(product: Product) {
    const cartItem = new CartItem(product);
    this.cartService.addToCart(cartItem);
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 1000);
  }

  gotoProduct(product: Product) {
    this.router.navigate([`product-details/${product._id}`]);
  }

}
