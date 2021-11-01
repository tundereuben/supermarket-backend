import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-batteries-socket-plugs-lightbulbs',
  templateUrl: './batteries-socket-plugs-lightbulbs.component.html',
  styleUrls: ['./batteries-socket-plugs-lightbulbs.component.css']
})
export class BatteriesSocketPlugsLightbulbsComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('batteries socket plugs lightbulbs');
  }

}
