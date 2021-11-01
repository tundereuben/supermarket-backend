import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-fresh-goat-and-ram-meat',
  templateUrl: './fresh-goat-and-ram-meat.component.html',
  styleUrls: ['./fresh-goat-and-ram-meat.component.css']
})
export class FreshGoatAndRamMeatComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('fresh goat and ram meat');
  }

}
