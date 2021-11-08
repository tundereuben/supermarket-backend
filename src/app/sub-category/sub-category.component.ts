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

  private subCategoryURL = [
    { name: 'culinary herbs', url: 'culinary-herbs'},
    { name: 'spices', url: 'spices'},
    { name: 'fresh fruit', url: 'fresh-fruits'},
    { name: 'fresh vegetables', url: 'fresh-vegetables'},
    { name: 'frozen fruits and vegetables', url: 'frozen-fruits-and-vegetables'},
    { name: 'fresh poultry meat', url: 'fresh-poultry-meat'},
    { name: 'fresh cow meat', url: 'fresh-cow-meat'},
    { name: 'fresh goat and ram meat', url: 'fresh-goat-and-ram-meat'},
    { name: 'frozen meat', url: 'frozen-meat'},
    { name: 'fresh pork', url: 'pork'},
    { name: 'spices', url: 'spices'},
    { name: 'spices', url: 'spices'},
  ];

  constructor(
    private service: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.subCategoryName = this.getUrl(params.name);
        this.items$ = this.service.getSubCategories(this.subCategoryName);
      });
  }

  getUrl(subCategory) {
    const subCategoryIndex = this.subCategoryURL.findIndex(sub => sub.url === subCategory);
    console.log(subCategoryIndex, '>>>');
    return this.subCategoryURL[subCategoryIndex].name;
  }

  gotoProduct(product: Product) {
    this.router.navigate([`product-details/${product._id}`]);
  }


}
