import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services/product.service';
import {Product} from '../models/Product';
import {Observable} from 'rxjs';
import {CartService} from '../services/cart.service';
import {CartItem} from '../common/cart-item';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  public product$: Observable<Product>;
  public product: Product;
  public showAlert: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.showAlert = false;
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.product$ = this.productService.getProduct(params.id);
      });
  }

  addToCart(product: Product) {
    // console.log(`Adding to cart: ${product.name}, ${product.price}`);
    this.product = product;
    const theCartItem = new CartItem(product);
    this.cartService.addToCart(theCartItem);
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 2000);
  }

}
