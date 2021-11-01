import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-waste-bins-and-bin-bags',
  templateUrl: './waste-bins-and-bin-bags.component.html',
  styleUrls: ['./waste-bins-and-bin-bags.component.css']
})
export class WasteBinsAndBinBagsComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('waste bins and bin bags');
  }

}
