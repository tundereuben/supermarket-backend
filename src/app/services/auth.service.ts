import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register(user: User): Observable<User> {
    const baseUrl = 'https://lucent-supermarket-api.herokuapp.com/users';
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
    });
    return this.http.post<User>(baseUrl, JSON.stringify(user), {headers});
  }

  login(user: User) {
    const baseUrl = 'https://lucent-supermarket-api.herokuapp.com/users/login';
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
    });
    return this.http.post<User>(baseUrl, JSON.stringify(user), {headers});
  }
}
