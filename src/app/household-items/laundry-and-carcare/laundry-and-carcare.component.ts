import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-laundry-and-carcare',
  templateUrl: './laundry-and-carcare.component.html',
  styleUrls: ['./laundry-and-carcare.component.css']
})
export class LaundryAndCarcareComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('laundry and carcare');
  }

}
