import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductDashboardComponent} from './dashboard/product-dashboard/product-dashboard.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CategoryHomeComponent} from './category-home/category-home.component';
import {SearchComponent} from './search/search.component';
import {SingleProductComponent} from './single-product/single-product.component';
import {SubCategoryComponent} from './sub-category/sub-category.component';
import {CartDetailsComponent} from './cart-details/cart-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: ProductDashboardComponent },

  { path: 'herbs', component: CategoryHomeComponent, data: { category: 'herbs' } },

  { path: 'meats', component: CategoryHomeComponent, data: { category: 'meats' } },

  { path: 'fruits-and-vegetables', component: CategoryHomeComponent, data: { category: 'fruits and vegetables'} },

  { path: 'naija-food', component: CategoryHomeComponent, data: { category: 'naija food'} },

  { path: 'snacks', component: CategoryHomeComponent, data: { category: 'snacks'} },

  { path: 'household-items', component: CategoryHomeComponent, data: { category: 'household items'} },

  { path: 'gift-items-and-souvenirs', component: CategoryHomeComponent, data: { category: 'gift items and souvenirs'} },

  { path: 'restaurant-at-home', component: CategoryHomeComponent, data: { category: 'restaurant at home'} },

  { path: 'product-details/:id', component: SingleProductComponent },
  { path: 'sub-category/:name', component: SubCategoryComponent },
  { path: 'cart-details', component: CartDetailsComponent },

  { path: 'search', component: SearchComponent },


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
