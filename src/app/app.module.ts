import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { SingleProductComponent } from './single-product/single-product.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { CartStatusComponent } from './cart-status/cart-status.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductDashboardComponent,
    PageNotFoundComponent,
    SearchComponent,
    SingleProductComponent,
    SubCategoryComponent,
    CartStatusComponent,
    CartItemComponent,
    CartDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
