import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductDashboardComponent} from './dashboard/product-dashboard/product-dashboard.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SearchComponent} from './search/search.component';
import {SingleProductComponent} from './single-product/single-product.component';
import {SubCategoryComponent} from './sub-category/sub-category.component';
import {CartDetailsComponent} from './cart-details/cart-details.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {PaymentComponent} from './payment/payment.component';
import {AuthGuardService} from './services/auth-guard.service';
import {PaymentSuccessfulComponent} from './payment/payment-successful/payment-successful.component';
import {UserDetailsComponent} from './auth/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: ProductDashboardComponent, canActivate: [AuthGuardService], data: { role: 'ADMIN'} },
  { path: 'product-details/:id', component: SingleProductComponent },
  { path: 'sub-category/:name', component: SubCategoryComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService] },
  { path: 'user-details', component: UserDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuardService]},
  { path: 'payment-success', component: PaymentSuccessfulComponent, canActivate: [AuthGuardService]},

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
