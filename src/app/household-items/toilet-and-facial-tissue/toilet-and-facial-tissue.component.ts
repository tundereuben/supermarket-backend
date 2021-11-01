import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-toilet-and-facial-tissue',
  templateUrl: './toilet-and-facial-tissue.component.html',
  styleUrls: ['./toilet-and-facial-tissue.component.css']
})
export class ToiletAndFacialTissueComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('toilet and facial tissue');
  }

}
