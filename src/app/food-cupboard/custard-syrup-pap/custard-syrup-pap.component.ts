import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-custard-syrup-pap',
  templateUrl: './custard-syrup-pap.component.html',
  styleUrls: ['./custard-syrup-pap.component.css']
})
export class CustardSyrupPapComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('custard, jelly and pap');
  }

}
