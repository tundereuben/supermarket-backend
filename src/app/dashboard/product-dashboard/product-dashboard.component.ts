import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  public products: Product[];
  public productsLength: number;
  pageNumbers: number[];
  public searchForm: FormGroup;


  constructor(
    private service: ProductService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.service.getProducts()
      .subscribe(data => {
        this.products = data;
        this.productsLength = data.length;
        console.log(this.products.length);
        console.log(`products >>> `, (this.productsLength / 10));
      });
    this.createSearchForm();
  }

  createSearchForm() {
    this.searchForm = this.fb.group({
      category: '',
      subCategory: '',
    });
  }

  search() {
    const rawValue = this.searchForm.getRawValue();
    this.service.searchProducts(rawValue.category)
      .subscribe(data => {
        this.products = data;
        console.log(this.products);
      });
    console.log(rawValue);
  }

}
