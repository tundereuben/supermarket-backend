import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-salad-dressing-soups-sauces',
  templateUrl: './salad-dressing-soups-sauces.component.html',
  styleUrls: ['./salad-dressing-soups-sauces.component.css']
})
export class SaladDressingSoupsSaucesComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('salad dressing soups and sauces');
  }

}
