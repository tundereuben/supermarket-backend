import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public items$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(query => {
        console.log(query);
        this.items$ = this.productService.searchProducts(query.search);
      });
  }

}
