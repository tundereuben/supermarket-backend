import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-canned-food',
  templateUrl: './canned-food.component.html',
  styleUrls: ['./canned-food.component.css']
})
export class CannedFoodComponent implements OnInit {
  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('canned food');
  }

}
