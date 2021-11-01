import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-kitchen-towels-and-serviettes',
  templateUrl: './kitchen-towels-and-serviettes.component.html',
  styleUrls: ['./kitchen-towels-and-serviettes.component.css']
})
export class KitchenTowelsAndServiettesComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('kitchen towels and serviettes');
  }

}
