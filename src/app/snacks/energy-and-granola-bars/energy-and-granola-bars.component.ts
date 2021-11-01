import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-energy-and-granola-bars',
  templateUrl: './energy-and-granola-bars.component.html',
  styleUrls: ['./energy-and-granola-bars.component.css']
})
export class EnergyAndGranolaBarsComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('hampers');
  }

}
