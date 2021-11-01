import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-lunch-and-dinner',
  templateUrl: './lunch-and-dinner.component.html',
  styleUrls: ['./lunch-and-dinner.component.css']
})
export class LunchAndDinnerComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('lunch and dinner');
  }

}
