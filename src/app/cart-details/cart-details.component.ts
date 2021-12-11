import { Component, OnInit } from '@angular/core';
import {CartItem} from '../common/cart-item';
import {CartService} from '../services/cart.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  public cartItems: CartItem[] = [];
  public totalPrice = 0;
  public totalQuantity = 0;
  public shippingFee = 1000;
  private retUrl: string;

  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(data => {
        this.retUrl = data.retUrl;
      });
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

  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }

  checkout() {
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.router.navigate(['checkout'], { queryParams: {retUrl: this.retUrl } } );
  }

}
