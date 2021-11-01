import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-bakeware-and-cookware',
  templateUrl: './bakeware-and-cookware.component.html',
  styleUrls: ['./bakeware-and-cookware.component.css']
})
export class BakewareAndCookwareComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('bakeware and cookware');
  }

}
