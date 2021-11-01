import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-bisucuits-and-wafers',
  templateUrl: './bisucuits-and-wafers.component.html',
  styleUrls: ['./bisucuits-and-wafers.component.css']
})
export class BisucuitsAndWafersComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('biscuits and wafers');
  }

}
