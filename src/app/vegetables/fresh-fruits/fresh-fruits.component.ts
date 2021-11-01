import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-fresh-fruits',
  templateUrl: './fresh-fruits.component.html',
  styleUrls: ['./fresh-fruits.component.css']
})
export class FreshFruitsComponent implements OnInit {

  public items$: Observable<Product[]>;
  public page: number;
  public pageSize: number;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.page = 1;
    this.pageSize = 10;
    this.items$ = this.service.getSubCategories('fresh fruit');
  }

}
