import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-beverages-and-drinks',
  templateUrl: './beverages-and-drinks.component.html',
  styleUrls: ['./beverages-and-drinks.component.css']
})
export class BeveragesAndDrinksComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('beverages and drinks');
  }

}
