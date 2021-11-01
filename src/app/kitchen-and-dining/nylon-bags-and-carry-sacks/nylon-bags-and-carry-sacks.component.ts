import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-nylon-bags-and-carry-sacks',
  templateUrl: './nylon-bags-and-carry-sacks.component.html',
  styleUrls: ['./nylon-bags-and-carry-sacks.component.css']
})
export class NylonBagsAndCarrySacksComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('nylon bags and carry sacks');
  }

}
