import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../models/User';
import {Router} from '@angular/router';
import {CartService} from '../services/cart.service';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';
import {Flutterwave, PaymentSuccessResponse} from 'flutterwave-angular-v3';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
  export class PaymentComponent implements OnInit {

  public paymentForm: FormGroup;
  public totalPrice = 0;
  public totalQuantity = 0;

  public isLoggedIn = false;
  public user: User;

  // flutterwave parameters
  publicKey = 'FLWPUBK_TEST-e05b305c48c395af32844477606c105a-X';
  // publicKey = 'FLWPUBK-6270b1824f0f4b9a54d8e299abf3ca2d-X';
  customerDetails = { name: 'Demo Customer  Name', email: 'customer@mail.com', phone_number: '08100000000'};
  customizations = {
    title: 'Customization Title',
    description: 'Customization Description',
    logo: 'https://flutterwave.com/images/logo-colored.svg'
  };
  meta = { counsumer_id: '7898', consumer_mac: 'kjs9s8ss7dd'};
  // flutterwave parameters end

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cartService: CartService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private flutterwave: Flutterwave
  ) { }

  /*flutterwave methods*/
  makePaymentCallback(response: PaymentSuccessResponse): void {
    console.log('Pay', response);
    this.flutterwave.closePaymentModal(5);
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
    } else {
      this.router.navigate(['login']);
    }
  }

  patchUserDetails() {
    this.paymentForm.patchValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      amount: this.totalPrice
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

    this.cartService.computeCartTotals();
  }

  payWithPaystack() {
    const rawValue = this.paymentForm.getRawValue();
    /* const handler = PaystackPop.setup({
      key: 'pk_test_xxxxxxxxxx', // Replace with your public key
      email: rawValue.email,
      amount: rawValue.amount * 100,
    });

    handler.openIframe(); */
  }

}
