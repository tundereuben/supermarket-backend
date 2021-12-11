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

  public checkoutFormGroup: FormGroup;
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
    this.createCheckoutForm();
    this.reviewCartDetails();
    this.getUser();
  }

  getUser() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.user = this.tokenStorage.getUser().user;
      console.log(`current user >>>>`, this.user)
      this.token = this.tokenStorage.getToken();
      this.patchUserDetails();
    } else {
      this.router.navigate(['login']);
    }
  }

  patchUserDetails() {
    this.checkoutFormGroup.patchValue({
      customer: {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        phone: this.user.phone
      },
      shippingAddress: {
        street: this.user.shippingAddress.street,
        city: this.user.shippingAddress.city,
        state: this.user.shippingAddress.state,
        country: this.user.shippingAddress.country,
      },
      billingAddress: {
        street: this.user.billingAddress.street,
        city: this.user.billingAddress.city,
        state: this.user.billingAddress.state,
        country: this.user.billingAddress.country,
      }
    });
  }

  createCheckoutForm() {
    this.checkoutFormGroup = this.fb.group({
      customer: this.fb.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        phone: ['']
      }),
      shippingAddress: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
      }),
      billingAddress: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
      })
    });
  }

  copyShippingAddressToBillingAddress(event) {
    if (event.target.checked) {
      this.checkoutFormGroup.controls.billingAddress
        .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
    } else {
      this.checkoutFormGroup.controls.billingAddress.reset();
    }
  }

  checkout() {
    const shippingAddress = this.checkoutFormGroup.get('shippingAddress').value;
    const billingAddress = this.checkoutFormGroup.get('billingAddress').value;
    const customer = this.checkoutFormGroup.get('customer').value;

    const dataToPost: User = {
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
      shippingAddress: {
        ...shippingAddress
      },
      billingAddress: {
        ...billingAddress
      }
    };

    // todo: check if form was touched before updating user
    this.authService.updateUser(dataToPost)
      .subscribe(data => {
        const userData = {
          token: this.token,
          user: {
            ...data
          }
        };
        this.tokenStorage.saveUser(userData);
        this.router.navigate(['payment']);
      });
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
