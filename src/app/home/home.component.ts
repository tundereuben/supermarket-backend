import { Component, OnInit } from '@angular/core';
import {Product} from '../models/Product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public items: Product[];
  public categories: any[];

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.categories = [
      {
        name: 'fruit and vegetable',
        products: []
      },
      {
        name: 'food cupboard',
        products: []
      },
      {
        name: 'meats',
        products: []
      },
      {
        name: 'naija food',
        products: []
      },
    ];

    this.categories.forEach((category, i) => {
      this.service.getAllCategories(category.name, true, 4)
        .subscribe(data => {
          category.products = data;
          console.log(category.products);
        });
    });
  }

}
