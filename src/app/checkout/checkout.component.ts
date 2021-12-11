import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {CartItem} from '../common/cart-item';
import {CartService} from '../services/cart.service';
import {User} from '../models/User';
import {TokenStorageService} from '../services/token-storage.service';
import {PurchaseService} from '../services/purchase.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public totalPrice = 0;
  public totalQuantity = 0;
  public shippingFee = 1000;

  public isLoggedIn = false;
  public user: User;
  public token: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cartService: CartService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit() {
    const reload = JSON.parse(sessionStorage.getItem('reload'));
    if (reload) {
      sessionStorage.setItem('reload', JSON.stringify(false));
      location.reload();
    }
    this.cartService.getCartItems();
    this.reviewCartDetails();
    this.getUser();
  }

  getUser() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.user = this.tokenStorage.getUser().user;
      this.token = this.tokenStorage.getToken();
    } else {
      this.router.navigate(['login']);
    }
  }

  checkout() {
    this.router.navigate(['payment']);
  }

  reviewCartDetails() {
    this.cartService.totalQuantity.asObservable()
      .subscribe(totalQuantity => this.totalQuantity = totalQuantity
    );

    this.cartService.totalPrice.asObservable()
      .subscribe(totalPrice => this.totalPrice = totalPrice
    );

    this.cartService.computeCartTotals();
  }

  gotoSearch() {
    this.router.navigate(['search'], { queryParams: { search: ''}});
  }


}
