import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-dairy-cheese-egg',
  templateUrl: './dairy-cheese-egg.component.html',
  styleUrls: ['./dairy-cheese-egg.component.css']
})
export class DairyCheeseEggComponent implements OnInit {
  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('dairy,cheese,eggs');
  }

}
