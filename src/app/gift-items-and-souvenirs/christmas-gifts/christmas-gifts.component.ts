import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-christmas-gifts',
  templateUrl: './christmas-gifts.component.html',
  styleUrls: ['./christmas-gifts.component.css']
})
export class ChristmasGiftsComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('christmas gifts');
  }

}
