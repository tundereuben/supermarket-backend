import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-ham-sausage-hotdog',
  templateUrl: './ham-sausage-hotdog.component.html',
  styleUrls: ['./ham-sausage-hotdog.component.css']
})
export class HamSausageHotdogComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('ham, sausages and hot dogs');
  }

}
