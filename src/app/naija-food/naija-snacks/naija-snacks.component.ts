import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-naija-snacks',
  templateUrl: './naija-snacks.component.html',
  styleUrls: ['./naija-snacks.component.css']
})
export class NaijaSnacksComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('naija snack');
  }

}
