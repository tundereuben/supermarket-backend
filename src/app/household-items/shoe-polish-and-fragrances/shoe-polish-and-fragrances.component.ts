import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-shoe-polish-and-fragrances',
  templateUrl: './shoe-polish-and-fragrances.component.html',
  styleUrls: ['./shoe-polish-and-fragrances.component.css']
})
export class ShoePolishAndFragrancesComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('shoe polish and fragrances');
  }

}
