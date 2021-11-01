import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-toilet-and-carcare',
  templateUrl: './toilet-and-carcare.component.html',
  styleUrls: ['./toilet-and-carcare.component.css']
})
export class ToiletAndCarcareComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('toilet and carcare');
  }

}
