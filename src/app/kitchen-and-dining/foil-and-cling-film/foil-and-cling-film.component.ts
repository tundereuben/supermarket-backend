import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-foil-and-cling-film',
  templateUrl: './foil-and-cling-film.component.html',
  styleUrls: ['./foil-and-cling-film.component.css']
})
export class FoilAndClingFilmComponent implements OnInit {

  public items$: Observable<Product[]>;

  constructor(
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.items$ = this.service.getSubCategories('foil and cling film');
  }

}
