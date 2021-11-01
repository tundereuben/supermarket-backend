import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-air-freshners-and-fragrances',
  templateUrl: './air-freshners-and-fragrances.component.html',
  styleUrls: ['./air-freshners-and-fragrances.component.css']
})
export class AirFreshnersAndFragrancesComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('air freshners and fragrances');
  }

}
