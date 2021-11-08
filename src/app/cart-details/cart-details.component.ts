import { Component, OnInit } from '@angular/core';
import {CartItem} from '../common/cart-item';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  public cartItems: CartItem[] = [];
  public totalPrice = 0;
  public totalQuantity = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.listCartDetails();
  }

  listCartDetails() {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.asObservable()
      .subscribe(data => this.totalPrice = data);

    this.cartService.totalQuantity.asObservable()
      .subscribe(data => this.totalQuantity = data);

    this.cartService.computeCartTotals();
  }

}
