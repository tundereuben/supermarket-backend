import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  public items$: Observable<Product[]>;
  public subCategoryName: string;

  constructor(
    private service: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.subCategoryName = params.name;
        console.log(this.subCategoryName);
        this.items$ = this.service.getSubCategories(params.name);
      });
  }

  gotoProduct(product: Product) {
    this.router.navigate([`product-details/${product._id}`]);
  }

}
