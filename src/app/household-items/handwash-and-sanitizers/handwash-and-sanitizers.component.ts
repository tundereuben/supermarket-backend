import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-handwash-and-sanitizers',
  templateUrl: './handwash-and-sanitizers.component.html',
  styleUrls: ['./handwash-and-sanitizers.component.css']
})
export class HandwashAndSanitizersComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('handwash and sanitizers');
  }

}
