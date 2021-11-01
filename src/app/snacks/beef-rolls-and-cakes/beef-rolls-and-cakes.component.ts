import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-beef-rolls-and-cakes',
  templateUrl: './beef-rolls-and-cakes.component.html',
  styleUrls: ['./beef-rolls-and-cakes.component.css']
})
export class BeefRollsAndCakesComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('beef rolls and cakes');
  }

}
