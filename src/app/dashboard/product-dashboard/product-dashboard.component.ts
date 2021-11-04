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
  public newProductForm: FormGroup;
  public searchForm: FormGroup;

  public buttonLabel = 'Add Product';
  public shouldEditProduct: boolean;
  public productToEdit: Product;
  public categories: any[];
  public subCategories: any[];

  constructor(
    private service: ProductService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getProducts();
    this.createNewProductForm();
    this.createSearchForm();
    this.getCategories();
  }

  getCategories() {
    this.categories = ['a', 'b', 'c'];
  }

  getSubCategories(category: string) {
    this.subCategories = ['e', 'f', 'g'];
  }

  createSearchForm() {
    this.searchForm = this.fb.group({
      keyword: '',
    });
  }

  getProducts() {
    this.buttonLabel = 'Add Products';
    this.shouldEditProduct = false;
    this.service.searchProducts('')
      .subscribe(data => {
        this.products = data;
        this.productsLength = data.length;
        console.log(this.products.length);
        console.log(`products >>> `, (this.productsLength / 10));
      });
  }

  createNewProductForm() {
    this.newProductForm = this.fb.group({
      name: '',
      category: '',
      subCategory: '',
      display: true,
      imageUrl: '',
      price: 0,
      promo: false
    });
  }

  addProduct() {
    const rawValue = this.newProductForm.getRawValue();
    const dataToPost = {
      ...rawValue
    };

    if (!this.shouldEditProduct) {
      this.service.addProduct(dataToPost)
        .subscribe(data => {
          this.getProducts();
          console.log('data to DB >>>', data);
        });
    } else {
      this.service.editProduct(dataToPost, this.productToEdit._id)
        .subscribe(data => {
          this.getProducts();
          console.log(`edited product >>>`, data);
        });
    }

  }

  editProduct(product: Product) {
    this.shouldEditProduct = true;
    this.productToEdit = product;
    this.buttonLabel = 'Edit Product';
    this.newProductForm.patchValue({
      ...this.productToEdit
    });
    console.log(this.productToEdit);
  }

  deleteProduct(product: Product) {
    this.service.deleteProduct(product)
      .subscribe(data => {
        console.log(`data >>>`, data);
        this.getProducts();
      });
  }

  search() {
    const rawValue = this.searchForm.getRawValue();
    this.service.searchProducts(rawValue.keyword)
      .subscribe(data => {
        this.products = data;
      });
  }

}
