import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {User} from '../models/User';

// const AUTH_API = 'https://lucent-supermarket-api.herokuapp.com/';
const AUTH_API = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json '})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Subject<User> = new Subject<User>();

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'users/login', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'users', {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  updateUser(user: User) {
    return this.http.patch(AUTH_API + 'users/me', user, httpOptions);
  }

  logout() {
    return this.http.post(AUTH_API + 'users/logout', httpOptions);
  }

  logoutAll() {

  }
}
