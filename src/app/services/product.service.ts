import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Product} from '../models/Product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(
    limit: number = 1000,
    skip: number = 0
    ): Observable<Product[]> {
    const params = new HttpParams()
      .append('limit', `${limit}`)
      .append('skip', `${skip}`);

    const baseUrl = 'https://lucent-supermarket-api.herokuapp.com/products';
    return this.http.get<Product[]>(baseUrl, { params });
  }

  searchProducts(
    search: string,
    // limit: number = 10,
    // skip: number = 0
  ): Observable<Product[]> {
    const params = new HttpParams()
      .append('search', `${search}`);
      // .append('limit', `${limit}`)
      // .append('skip', `${skip}`);

    // const baseUrl = 'https://lucent-supermarket-api.herokuapp.com/search';
    const baseUrl = 'http://localhost:3000/search';
    return this.http.get<Product[]>(baseUrl, { params });
  }

  getAllCategories(category: string, promo: boolean = false, limit: number = 100): Observable<Product[]> {
    const params = new HttpParams()
      .append('category', category)
      .append('promo', `${promo}`)
      .append('limit', `${limit}`);
    const baseUrl = 'https://lucent-supermarket-api.herokuapp.com/products';
    return this.http.get<Product[]>(baseUrl, { params });
  }

  getSubCategories(subCategoryName: string): Observable<Product[]> {
    const params = new HttpParams().set('subCategory', subCategoryName);
    const baseUrl = 'https://lucent-supermarket-api.herokuapp.com/products';
    return this.http.get<Product[]>(baseUrl, { params });
  }

  deleteProduct(product: Product): Observable<Product> {
    const baseUrl = 'https://lucent-supermarket-api.herokuapp.com/products';
    const url = baseUrl + '/' + product._id;
    return this.http.delete<Product>(url);
  }

  getSubCategoryNames(category: string): Observable<any[]> {
    const params = new HttpParams().set('category', category);
    // const baseUrl = 'http://localhost:3000/sub-category';
    const baseUrl = 'https://lucent-supermarket-api.herokuapp.com/sub-category';
    return this.http.get<any[]>(baseUrl, { params });
  }

}