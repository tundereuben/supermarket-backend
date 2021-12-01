import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

// const AUTH_API = 'https://lucent-supermarket-api.herokuapp.com/';
const PURCHASE_API = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json '})
};

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  createPurchase(purchase: any): Observable<any> {
    return this.http.post(PURCHASE_API + '/purchase', purchase, httpOptions);
  }

  getPurchases(): Observable<any> {
    return this.http.get(`${PURCHASE_API}/purchase`, httpOptions);
  }

  getPurchase(id: string): Observable<any> {
    return this.http.get(`${PURCHASE_API}/purchase/${id}`);
  }

  updatePurchase(purchase: any): Observable<any> {
    return this.http.patch(`${PURCHASE_API}/purchase/${purchase.id}`, purchase, httpOptions);
  }

  deletePurchase(id: string): Observable<any> {
    return this.http.delete(`${PURCHASE_API}/purchase/${id}`);
  }

  sendCartItems(cartItems: any): Observable<any> {
    return this.http.post(PURCHASE_API + '/placeOrder', cartItems, httpOptions);
  }

}
