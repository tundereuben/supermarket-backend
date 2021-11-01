import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-beans-rice-grains',
  templateUrl: './beans-rice-grains.component.html',
  styleUrls: ['./beans-rice-grains.component.css']
})
export class BeansRiceGrainsComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('beans, rice and grains');
  }

}
