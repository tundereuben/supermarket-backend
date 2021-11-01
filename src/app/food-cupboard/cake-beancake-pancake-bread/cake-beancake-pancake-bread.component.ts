import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-cake-beancake-pancake-bread',
  templateUrl: './cake-beancake-pancake-bread.component.html',
  styleUrls: ['./cake-beancake-pancake-bread.component.css']
})
export class CakeBeancakePancakeBreadComponent implements OnInit {
  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('cake, bake, pancake and bread')
  }

}
