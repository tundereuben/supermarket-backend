import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {CartItem} from '../common/cart-item';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public items$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(query => {
        console.log(query);
        this.items$ = this.productService.searchProducts(query.search);
      });
  }

  addToCart(product: Product) {
    console.log(`Adding to cart: ${product.name}, ${product.price}`);
    const cartItem = new CartItem(product);
    this.cartService.addToCart(cartItem);
  }

  gotoProduct(product: Product) {
    this.router.navigate([`product-details/${product._id}`]);
  }

}
