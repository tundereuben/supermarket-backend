import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-frozen-meat',
  templateUrl: './frozen-meat.component.html',
  styleUrls: ['./frozen-meat.component.css']
})
export class FrozenMeatComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('frozen meat');
  }

}
