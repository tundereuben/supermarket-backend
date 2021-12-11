import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../models/User';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from '../services/cart.service';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';
import {Flutterwave, PaymentSuccessResponse} from 'flutterwave-angular-v3';
import {CartItem} from '../common/cart-item';
import {PurchaseService} from '../services/purchase.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
  export class PaymentComponent implements OnInit {

  public paymentForm: FormGroup;
  public totalPrice = 0;
  public totalQuantity = 0;
  public shippingFee = 1000;
  public cartItems: CartItem[] = [];

  public isLoggedIn = false;
  public user: User;

  public paymentSucceeded: boolean;

  publicKey = 'FLWPUBK_TEST-197102ed13258e20eecd0cf4096a1385-X';
  customerDetails = {
    name: 'Demo Customer Name',
    email: 'customer@mail.com',
    phone_number: '08100000000'
  };
  customizations = {
    title: 'Complete payment',
    description: 'Customization Description',
    logo: 'https://flutterwave.com/images/logo-colored.svg'
  };
  meta = { consumer_id: '7898', consumer_mac: 'kjs9s8ss7dd'};
  testCard = {
    cardNumber: 5531886652142950,
    cvv: 564,
    expiry: '09/32',
    pin: 3310,
    otp: 12345
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private purchaseService: PurchaseService,
    private flutterwave: Flutterwave
  ) { }

  /*flutterwave methods*/
  makePaymentCallback(response: PaymentSuccessResponse): void {
    console.log('Pay', response);
    this.flutterwave.closePaymentModal(3);
    this.purchaseService.sendCartItems(JSON.stringify(this.cartItems))
      .subscribe(data => {
        console.log(`Send cartItems to admin >>>`, data);
        this.router.navigate(['payment-success']);
      });
  }

  closedPaymentModal(): void {
    console.log('payment is closed');
  }

  generateReference(): string {
    const date = new Date();
    return date.getTime().toString();
  }
  /*flutterwave methods end*/

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.paymentSucceeded = data.paymentSucceeded === 'Y';
    });
    this.createPaymentForm();
    this.reviewCartDetails();
    this.getUser();
  }

  createPaymentForm() {
    this.paymentForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      amount: '',
    });
  }

  getUser() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.user = this.tokenStorage.getUser().user;
      this.patchUserDetails();
      this.customerDetails = {
        name: `${this.user.firstName} ${this.user.lastName}`,
        email: this.user.email,
        phone_number: this.user.phone
      };
    } else {
      this.router.navigate(['login']);
    }
  }

  patchUserDetails() {
    this.paymentForm.patchValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      amount: this.totalPrice + 1000
    });
  }

  reviewCartDetails() {
    // subscribe to cartService.totalQuantity
    this.cartService.totalQuantity.asObservable()
      .subscribe(totalQuantity => this.totalQuantity = totalQuantity
      );

    // subscribe to cartService.totalPrice
    this.cartService.totalPrice.asObservable()
      .subscribe(totalPrice => this.totalPrice = totalPrice
      );

    this.cartItems = this.cartService.cartItems;

    this.cartService.computeCartTotals();
  }

}
