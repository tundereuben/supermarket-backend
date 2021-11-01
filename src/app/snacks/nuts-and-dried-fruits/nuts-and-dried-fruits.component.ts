import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-nuts-and-dried-fruits',
  templateUrl: './nuts-and-dried-fruits.component.html',
  styleUrls: ['./nuts-and-dried-fruits.component.css']
})
export class NutsAndDriedFruitsComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('nuts and dried fruits');
  }

}
