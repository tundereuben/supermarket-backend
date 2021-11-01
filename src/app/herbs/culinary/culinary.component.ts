import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-culinary',
  templateUrl: './culinary.component.html',
  styleUrls: ['./culinary.component.css']
})
export class CulinaryComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('cullinary herbs');
  }

}
