import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Category} from '../../models/Category';
import {SubCategory} from '../../models/SubCategory';

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

  public page = 1;
  public pageSize = 20;

  public buttonLabel = 'Add Product';
  public shouldEditProduct: boolean;
  public productToEdit: Product;
  public categories: Category[];
  public subCategories: SubCategory[];

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
    this.service.getCategories()
      .subscribe(data => {
        this.categories = data;
      });
  }

  getSubCategories(category: string) {
    this.service.getSubCategoryNames(category)
      .subscribe(data => {
        this.subCategories = data;
        console.log(`subcategories >>>`, this.subCategories);
      });
  }

  createSearchForm() {
    this.searchForm = this.fb.group({
      keyword: '',
    });
  }

  getProducts() {
    this.buttonLabel = 'Add Product';
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
          this.newProductForm.patchValue({});
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
    this.getSubCategories(product.category);
    this.newProductForm.patchValue({
      name: product.name,
      category: product.category,
      subCategory: product.subCategory,
      display: product.display,
      imageUrl: product.imageUrl,
      price: product.price,
      promo: product.promo
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
