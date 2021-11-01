import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-fresh-cow-meat',
  templateUrl: './fresh-cow-meat.component.html',
  styleUrls: ['./fresh-cow-meat.component.css']
})
export class FreshCowMeatComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('fresh cow meat');
  }

}
