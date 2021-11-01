import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-fresh-poultry-meat',
  templateUrl: './fresh-poultry-meat.component.html',
  styleUrls: ['./fresh-poultry-meat.component.css']
})
export class FreshPoultryMeatComponent implements OnInit {

  items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('fresh poultry meat');
  }

}
