import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  public totalPrice = 0.00;
  public totalQuantity = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.updateCartStatus();
  }

  updateCartStatus() {
    this.cartService.totalPrice.asObservable()
      .subscribe(data => this.totalPrice = data);

    this.cartService.totalQuantity.asObservable()
      .subscribe(data => this.totalQuantity = data);
  }

}
