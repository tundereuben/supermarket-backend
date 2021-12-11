import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../models/User';
import {Router} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public updateUserForm: FormGroup;
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
    this.createUserForm();
    this.getUser();
  }

  getUser() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.user = this.tokenStorage.getUser().user;
      this.token = this.tokenStorage.getToken();
      this.patchUserDetails();
    } else {
      this.router.navigate(['login']);
    }
  }

  patchUserDetails() {
    this.updateUserForm.patchValue({
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

  createUserForm() {
    this.updateUserForm = this.fb.group({
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
      this.updateUserForm.controls.billingAddress
        .setValue(this.updateUserForm.controls.shippingAddress.value);
    } else {
      this.updateUserForm.controls.billingAddress.reset();
    }
  }

  updateUser() {
    const shippingAddress = this.updateUserForm.get('shippingAddress').value;
    const billingAddress = this.updateUserForm.get('billingAddress').value;
    const customer = this.updateUserForm.get('customer').value;

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
        this.router.navigate(['/checkout']);
      });
  }


}
