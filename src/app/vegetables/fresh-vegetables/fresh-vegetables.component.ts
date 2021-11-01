import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-fresh-vegetables',
  templateUrl: './fresh-vegetables.component.html',
  styleUrls: ['./fresh-vegetables.component.css']
})
export class FreshVegetablesComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('fresh vegetables');
  }

}
