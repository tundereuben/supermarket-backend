import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-kitchen-utensils',
  templateUrl: './kitchen-utensils.component.html',
  styleUrls: ['./kitchen-utensils.component.css']
})
export class KitchenUtensilsComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('kitchen utensils');
  }

}
