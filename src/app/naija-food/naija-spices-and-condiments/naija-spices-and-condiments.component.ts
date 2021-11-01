import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-naija-spices-and-condiments',
  templateUrl: './naija-spices-and-condiments.component.html',
  styleUrls: ['./naija-spices-and-condiments.component.css']
})
export class NaijaSpicesAndCondimentsComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('naija spices and condiment');
  }

}
