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
  public newProductForm: FormGroup;
  public searchForm: FormGroup;

  public page = 1;
  public pageSize = 10;

  public buttonLabel = 'Add ';
  public shouldEditProduct: boolean;
  public productToEdit: Product;
  public productToDelete: Product;
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
    this.buttonLabel = 'Add ';
    this.shouldEditProduct = false;
    this.service.searchProducts('')
      .subscribe(data => {
        this.products = data;
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
      promo: false,
      desc: ''
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
          this.searchForm.patchValue({ keyword: rawValue.name });
          this.search();
          this.resetForm();
        });
    } else {
      this.service.editProduct(dataToPost, this.productToEdit._id)
        .subscribe(data => {
          this.searchForm.patchValue({ keyword: rawValue.name });
          this.search();
          console.log(`edited product >>>`, data);
        });
    }
  }

  editProduct(product: Product) {
    this.shouldEditProduct = true;
    this.productToEdit = product;
    this.buttonLabel = 'Edit ';
    this.getSubCategories(product.category);
    this.newProductForm.patchValue({
      name: product.name,
      category: product.category,
      subCategory: product.subCategory,
      display: product.display,
      imageUrl: product.imageUrl,
      price: product.price,
      promo: product.promo,
      desc: product.desc
    });
    console.log(this.productToEdit);
  }

  deleteProduct(product: Product) {
    this.productToDelete = product;
  }

  confirmDeleteProduct() {
    this.service.deleteProduct(this.productToDelete)
      .subscribe(data => {
        console.log(`data >>>`, data);
        this.search();
      });
  }

  search() {
    const rawValue = this.searchForm.getRawValue();
    this.service.searchProducts(rawValue.keyword)
      .subscribe(data => {
        this.products = data;
      });
  }

  resetForm() {
    this.buttonLabel = 'Add ';
    this.shouldEditProduct = false;
    this.newProductForm.reset();
  }

}
