import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-potato-and-plantain-chips',
  templateUrl: './potato-and-plantain-chips.component.html',
  styleUrls: ['./potato-and-plantain-chips.component.css']
})
export class PotatoAndPlantainChipsComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('potato and plantain chips');
  }

}
