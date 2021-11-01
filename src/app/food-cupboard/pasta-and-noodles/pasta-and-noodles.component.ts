import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-pasta-and-noodles',
  templateUrl: './pasta-and-noodles.component.html',
  styleUrls: ['./pasta-and-noodles.component.css']
})
export class PastaAndNoodlesComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('pasta and noodles');
  }
}
