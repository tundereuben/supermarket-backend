import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-home-decor-and-beddings',
  templateUrl: './home-decor-and-beddings.component.html',
  styleUrls: ['./home-decor-and-beddings.component.css']
})
export class HomeDecorAndBeddingsComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('home decor and beddings');
  }

}
