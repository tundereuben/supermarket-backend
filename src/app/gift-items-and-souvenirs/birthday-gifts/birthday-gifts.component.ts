import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-birthday-gifts',
  templateUrl: './birthday-gifts.component.html',
  styleUrls: ['./birthday-gifts.component.css']
})
export class BirthdayGiftsComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('birthday gifts');
  }

}
