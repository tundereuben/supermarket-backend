import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-herbs-home',
  templateUrl: './herbs-home.component.html',
  styleUrls: ['./herbs-home.component.css']
})
export class HerbsHomeComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategoryNames('herbs');
    this.items$.subscribe(data => console.log(data));
  }

}
