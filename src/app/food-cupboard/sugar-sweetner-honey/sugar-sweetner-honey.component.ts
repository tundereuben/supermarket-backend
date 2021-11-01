import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-sugar-sweetner-honey',
  templateUrl: './sugar-sweetner-honey.component.html',
  styleUrls: ['./sugar-sweetner-honey.component.css']
})
export class SugarSweetnerHoneyComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('sugar, sweetner and honey');
  }

}
