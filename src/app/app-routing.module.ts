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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: ProductDashboardComponent },
  { path: 'product-details/:id', component: SingleProductComponent },
  { path: 'sub-category/:name', component: SubCategoryComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'search', component: SearchComponent },

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
