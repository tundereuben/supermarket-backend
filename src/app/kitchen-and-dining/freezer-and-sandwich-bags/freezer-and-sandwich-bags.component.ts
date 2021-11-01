import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-freezer-and-sandwich-bags',
  templateUrl: './freezer-and-sandwich-bags.component.html',
  styleUrls: ['./freezer-and-sandwich-bags.component.css']
})
export class FreezerAndSandwichBagsComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('freezer and sandwich bags');
  }

}
