import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {Observable} from 'rxjs';
import {SubCategory} from '../models/SubCategory';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../models/User';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  public searchForm: FormGroup;
  public isLoggedIn = false;
  public user: User;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit() {
    this.createSearchForm();
    this.getUser();
  }

  getUser() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.user = this.tokenStorage.getUser().user;
    }
  }

  createSearchForm() {
    this.searchForm = this.fb.group({
      category: 'all',
      keyword: '',
    });
  }

  search() {
    const rawValue = this.searchForm.getRawValue();
    this.router.navigate([ 'search'], { queryParams: { search: rawValue.keyword }} );
  }

  logout() {
    this.tokenStorage.logOut();
    window.location.reload();
    this.router.navigate(['']);
  }

}
