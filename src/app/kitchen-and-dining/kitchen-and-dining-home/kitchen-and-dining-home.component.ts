import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-kitchen-and-dining-home',
  templateUrl: './kitchen-and-dining-home.component.html',
  styleUrls: ['./kitchen-and-dining-home.component.css']
})
export class KitchenAndDiningHomeComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('');
  }

}
