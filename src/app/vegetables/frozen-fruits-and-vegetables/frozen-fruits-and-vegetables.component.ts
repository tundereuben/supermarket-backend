import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-frozen-fruits-and-vegetables',
  templateUrl: './frozen-fruits-and-vegetables.component.html',
  styleUrls: ['./frozen-fruits-and-vegetables.component.css']
})
export class FrozenFruitsAndVegetablesComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('frozen fruits and vegetables');
  }

}
