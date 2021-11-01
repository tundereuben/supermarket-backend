import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-jam-spread-margarine-vinegar',
  templateUrl: './jam-spread-margarine-vinegar.component.html',
  styleUrls: ['./jam-spread-margarine-vinegar.component.css']
})
export class JamSpreadMargarineVinegarComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('jams, spread, magarine and vinegar');
  }

}
