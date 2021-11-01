import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {

  public items$: Observable<Product[]>;
  public categoryName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe(data => {
        this.categoryName = data.category;
        this.items$ = this.service.getSubCategoryNames(this.categoryName);
      });
  }

  generateUrl(item) {
    const  category = this.replaceCharacter(item.category);
    const name = this.replaceCharacter(item.name);
    const url = `/${category}/${name}`;
    this.router.navigate([url]);
    console.log(`generated url >>>`, url);
  }

  replaceCharacter(text) {
    return text.replaceAll(' ', '-');
  }

}
