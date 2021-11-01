import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-home-furniture',
  templateUrl: './home-furniture.component.html',
  styleUrls: ['./home-furniture.component.css']
})
export class HomeFurnitureComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('home furniture');
  }

}
