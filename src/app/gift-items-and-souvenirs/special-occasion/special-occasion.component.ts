import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-special-occasion',
  templateUrl: './special-occasion.component.html',
  styleUrls: ['./special-occasion.component.css']
})
export class SpecialOccasionComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('special occasion');
  }

}
