import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-naija-vegetables',
  templateUrl: './naija-vegetables.component.html',
  styleUrls: ['./naija-vegetables.component.css']
})
export class NaijaVegetablesComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('naija vegetables');
  }

}
