import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-candy-and-chewing-gum',
  templateUrl: './candy-and-chewing-gum.component.html',
  styleUrls: ['./candy-and-chewing-gum.component.css']
})
export class CandyAndChewingGumComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('candy and chewing gums');
  }

}
