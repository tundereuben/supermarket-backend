import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-storage-and-organization',
  templateUrl: './storage-and-organization.component.html',
  styleUrls: ['./storage-and-organization.component.css']
})
export class StorageAndOrganizationComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('storage and organization');
  }

}
