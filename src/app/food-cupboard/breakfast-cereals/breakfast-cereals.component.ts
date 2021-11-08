import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-breakfast-cereals',
  templateUrl: './breakfast-cereals.component.html',
  styleUrls: ['./breakfast-cereals.component.css']
})
export class BreakfastCerealsComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('breakfast cereals');
  }

}
