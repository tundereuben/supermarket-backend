import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Product} from '../models/Product';
import {Observable} from 'rxjs';
import {Category} from '../models/Category';

const baseUrl = 'https://lucent-supermarket-api.herokuapp.com';
// const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  searchProducts(
    search: string,
    limit: number = 10,
    skip: number = 0
  ): Observable<Product[]> {
    const params = new HttpParams()
      .append('search', `${search}`);
      // .append('limit', `${limit}`)
      // .append('skip', `${skip}`);
    const url = `${baseUrl}/search`;
    return this.http.get<Product[]>(url, { params });
  }

  getAllCategories(category: string, promo: boolean = false, limit: number = 100): Observable<Product[]> {
    const params = new HttpParams()
      .append('category', category)
      .append('promo', `${promo}`)
      .append('limit', `${limit}`);
    const url = `${baseUrl}/products`;
    return this.http.get<Product[]>(url, { params });
  }

  getCategories(): Observable<Category[]> {
    const url = `${baseUrl}/category`;
    return this.http.get<Category[]>(url);
  }

  getSubCategories(subCategoryName: string): Observable<Product[]> {
    const params = new HttpParams().set('subCategory', subCategoryName);
    const url = `${baseUrl}/products`;
    return this.http.get<Product[]>(url, { params });
  }

  getSubCategoryNames(category: string): Observable<any[]> {
    const params = new HttpParams().set('category', category);
    const url = `${baseUrl}/sub-category`;
    return this.http.get<any[]>(url, { params });
  }

  getProduct(id: string): Observable<Product> {
    const url = `${baseUrl}/products/${id}`;
    return this.http.get<Product>(url);
  }

  addProduct(product: Product): Observable<Product> {
    const url = `${baseUrl}/products`;
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
    });
    return this.http.post<Product>(url, JSON.stringify(product), { headers });
  }

  editProduct(product: Product, id: string): Observable<Product> {
    const url = `${baseUrl}/products/${id}`;
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
    });
    return this.http.patch<Product>(url, JSON.stringify(product), { headers });
  }

  deleteProduct(product: Product): Observable<Product> {
    const url = `${baseUrl}/products/${product._id}`;
    return this.http.delete<Product>(url);
  }

}
