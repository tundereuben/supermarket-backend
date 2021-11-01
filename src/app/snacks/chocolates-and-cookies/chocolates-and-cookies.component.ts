import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-chocolates-and-cookies',
  templateUrl: './chocolates-and-cookies.component.html',
  styleUrls: ['./chocolates-and-cookies.component.css']
})
export class ChocolatesAndCookiesComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('chocolates and cookies');
  }

}
