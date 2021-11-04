import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {Observable} from 'rxjs';
import {SubCategory} from '../models/SubCategory';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createSearchForm();
    this.activatedRoute.data
      .subscribe(data => {
        console.log(`activatedRoute Data >>>`, data.link);
      });
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

}
