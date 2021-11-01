import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-insecticides-and-rat-traps',
  templateUrl: './insecticides-and-rat-traps.component.html',
  styleUrls: ['./insecticides-and-rat-traps.component.css']
})
export class InsecticidesAndRatTrapsComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('insecticides and rat traps');
  }

}
