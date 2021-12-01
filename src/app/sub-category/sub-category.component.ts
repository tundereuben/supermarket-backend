import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CartItem} from '../common/cart-item';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  public items$: Observable<Product[]>;
  public subCategoryName: string;

  private subCategoryURL = [
    { name: 'culinary', url: 'culinary-herbs'},
    { name: 'spices', url: 'spices'},
    { name: 'fresh fruit', url: 'fresh-fruits'},
    { name: 'fresh vegetables', url: 'fresh-vegetables'},
    { name: 'frozen fruits and vegetables', url: 'frozen-fruits-and-vegetables'},
    { name: 'fresh poultry meat', url: 'fresh-poultry-meat'},
    { name: 'fresh cow meat', url: 'fresh-cow-meat'},
    { name: 'fresh goat and ram meat', url: 'fresh-goat-and-ram-meat'},
    { name: 'frozen meat', url: 'frozen-meat'},
    { name: 'fresh pork', url: 'pork'},

    { name: 'breakfast cereals', url: 'breakfast-cereals'},
    { name: 'beverages and drinks', url: 'beverages-and-drinks'},
    { name: 'beans, rice and grains', url: 'beans-rice-grains'},
    { name: 'custard, syrup and pap', url: 'custard-syrup-pap'},
    { name: 'cake, bake, pancake and bread', url: 'cake-beancake-pancake-bread'},
    { name: 'canned food', url: 'canned-food'},
    { name: 'dairy,cheese,eggs', url: 'dairy-cheese-egg'},
    { name: 'ham, sausages and hot dogs', url: 'ham-sausage-hotdog'},
    { name: 'jams, spread, magarine and vinegar', url: 'jam-spread-margarine-vinegar'},
    { name: 'olive and picks', url: 'olive-and-picks'},
    { name: 'oil', url: 'oil'},
    { name: 'pasta and noodles', url: 'pasta-and-noodles'},
    { name: 'salad dressing soups and sauces', url: 'salad-dressing-soups-sauces'},
    { name: 'swallow', url: 'swallow'},
    { name: 'sugar, sweetner and honey', url: 'sugar-sweetner-honey'},

    { name: 'naija vegetables', url: 'naija-vegetables'},
    { name: 'naija tubers', url: 'naija-tubers'},
    { name: 'naija condiment and spices', url: 'naija-spices-and-condiments'},
    { name: 'naija snack', url: 'naija-snacks'},

    { name: 'biscuits and wafers', url: 'biscuits-and-wafers'},
    { name: 'candy and chewing gums', url: 'candy-and-chewing-gum'},
    { name: 'chocolates and cookies', url: 'chocolates-and-cookies'},
    { name: 'nuts and dried fruits', url: 'nuts-and-dried-fruits'},
    { name: 'potato and plantain chips', url: 'potato-and-plantain-chips'},
    { name: 'energy and granola bars', url: 'energy-and-granola-bars'},
    { name: 'beef rolls and cakes', url: 'beef-rolls-and-cakes'},

    { name: 'toilet and facial tissue', url: 'toilet-and-facial-tissue'},
    { name: 'laundry and carcare', url: 'laundry-and-carcare'},
    { name: 'handwash and sanitizers', url: 'handwash-and-sanitizers'},
    { name: 'insecticides and rat traps', url: 'insecticides-and-rat-traps'},
    { name: 'air freshners and fragrances', url: 'air-freshners-and-fragrances'},
    { name: 'waste bins and bin bags', url: 'waste-bins-and-bin-bags'},
    { name: 'batteries socket plugs lightbulbs', url: 'batteries-sockets-plugs-light-bulbs'},
    { name: 'home decor and beddings', url: 'home-decor-and-beddings'},
    { name: 'home furniture', url: 'home-furniture'},
    { name: 'shoe polish and fragrances', url: 'shoe-polish-and-fragrances'},
    { name: 'pets', url: 'pets'},

    { name: 'kitchen towels and serviettes', url: 'kitchen-towels-and-serviettes'},
    { name: 'foil and cling film', url: 'foil-and-cling-film'},
    { name: 'freezer and sandwich bags', url: 'freezer-snd-sandwich-bags'},
    { name: 'storage and organization', url: 'storage-and-organization'},
    { name: 'kitchen appliances', url: 'kitchen-appliances'},
    { name: 'kitchen wares', url: 'kitchen-wares'},
    { name: 'nylon bags and carry sacks', url: 'nylon-bags-and-carry-sacks'},
    { name: 'food containers', url: 'food-containers'},

    { name: 'birthday gift', url: 'birthday-gift'},
    { name: 'christmas gift', url: 'christmas-gift'},
    { name: 'party supplies', url: 'party-supplies'},
    { name: 'hampers', url: 'hampers'},
    { name: 'special occasion', url: 'special-occasion'},
  ];

  constructor(
    private service: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.subCategoryName = this.getUrl(params.name);
        this.items$ = this.service.getSubCategories(this.subCategoryName);
      });
  }

  getUrl(subCategory) {
    const subCategoryIndex = this.subCategoryURL.findIndex(sub => sub.url === subCategory);
    console.log(subCategoryIndex, '>>>');
    return this.subCategoryURL[subCategoryIndex].name;
  }

  addToCart(product: Product) {
    console.log(`Adding to cart: ${product.name}, ${product.price}`);
    const cartItem = new CartItem(product);
    this.cartService.addToCart(cartItem);
  }

  gotoProduct(product: Product) {
    this.router.navigate([`product-details/${product._id}`]);
  }


}
