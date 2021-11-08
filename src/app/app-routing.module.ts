import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductDashboardComponent} from './dashboard/product-dashboard/product-dashboard.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CulinaryComponent} from './herbs/culinary/culinary.component';
import {SpicesComponent} from './herbs/spices/spices.component';
import {FreshCowMeatComponent} from './meats/fresh-cow-meat/fresh-cow-meat.component';
import {FreshGoatAndRamMeatComponent} from './meats/fresh-goat-and-ram-meat/fresh-goat-and-ram-meat.component';
import {FreshPoultryMeatComponent} from './meats/fresh-poultry-meat/fresh-poultry-meat.component';
import {FrozenMeatComponent} from './meats/frozen-meat/frozen-meat.component';
import {PorkComponent} from './meats/pork/pork.component';
import {BeansRiceGrainsComponent} from './food-cupboard/beans-rice-grains/beans-rice-grains.component';
import {BeveragesAndDrinksComponent} from './food-cupboard/beverages-and-drinks/beverages-and-drinks.component';
import {BreakfastCerealsComponent} from './food-cupboard/breakfast-cereals/breakfast-cereals.component';
import {CakeBeancakePancakeBreadComponent} from './food-cupboard/cake-beancake-pancake-bread/cake-beancake-pancake-bread.component';
import {CannedFoodComponent} from './food-cupboard/canned-food/canned-food.component';
import {CustardSyrupPapComponent} from './food-cupboard/custard-syrup-pap/custard-syrup-pap.component';
import {DairyCheeseEggComponent} from './food-cupboard/dairy-cheese-egg/dairy-cheese-egg.component';
import {HamSausageHotdogComponent} from './food-cupboard/ham-sausage-hotdog/ham-sausage-hotdog.component';
import {JamSpreadMargarineVinegarComponent} from './food-cupboard/jam-spread-margarine-vinegar/jam-spread-margarine-vinegar.component';
import {OliveAndPicksComponent} from './food-cupboard/olive-and-picks/olive-and-picks.component';
import {OilComponent} from './food-cupboard/oil/oil.component';
import {PastaAndNoodlesComponent} from './food-cupboard/pasta-and-noodles/pasta-and-noodles.component';
import {SaladDressingSoupsSaucesComponent} from './food-cupboard/salad-dressing-soups-sauces/salad-dressing-soups-sauces.component';
import {SwallowComponent} from './food-cupboard/swallow/swallow.component';
import {SugarSweetnerHoneyComponent} from './food-cupboard/sugar-sweetner-honey/sugar-sweetner-honey.component';
import {FreshFruitsComponent} from './vegetables/fresh-fruits/fresh-fruits.component';
import {FreshVegetablesComponent} from './vegetables/fresh-vegetables/fresh-vegetables.component';
import {FrozenFruitsAndVegetablesComponent} from './vegetables/frozen-fruits-and-vegetables/frozen-fruits-and-vegetables.component';
import {NaijaSnacksComponent} from './naija-food/naija-snacks/naija-snacks.component';
import {NaijaSpicesAndCondimentsComponent} from './naija-food/naija-spices-and-condiments/naija-spices-and-condiments.component';
import {NaijaTubersComponent} from './naija-food/naija-tubers/naija-tubers.component';
import {NaijaVegetablesComponent} from './naija-food/naija-vegetables/naija-vegetables.component';
import {BeefRollsAndCakesComponent} from './snacks/beef-rolls-and-cakes/beef-rolls-and-cakes.component';
import {BisucuitsAndWafersComponent} from './snacks/bisucuits-and-wafers/bisucuits-and-wafers.component';
import {CandyAndChewingGumComponent} from './snacks/candy-and-chewing-gum/candy-and-chewing-gum.component';
import {ChocolatesAndCookiesComponent} from './snacks/chocolates-and-cookies/chocolates-and-cookies.component';
import {EnergyAndGranolaBarsComponent} from './snacks/energy-and-granola-bars/energy-and-granola-bars.component';
import {NutsAndDriedFruitsComponent} from './snacks/nuts-and-dried-fruits/nuts-and-dried-fruits.component';
import {PopcornComponent} from './snacks/popcorn/popcorn.component';
import {PotatoAndPlantainChipsComponent} from './snacks/potato-and-plantain-chips/potato-and-plantain-chips.component';
import {MeatsHomeComponent} from './meats/meats-home/meats-home.component';
import {HerbsHomeComponent} from './herbs/herbs-home/herbs-home.component';
import {VegetablesHomeComponent} from './vegetables/vegetables-home/vegetables-home.component';
import {NaijaFoodHomeComponent} from './naija-food/naija-food-home/naija-food-home.component';
import {SnacksHomeComponent} from './snacks/snacks-home/snacks-home.component';
import {FoodCupboardHomeComponent} from './food-cupboard/food-cupboard-home/food-cupboard-home.component';
import {HouseholdItemsComponent} from './household-items/household-items/household-items.component';
import {ToiletAndFacialTissueComponent} from './household-items/toilet-and-facial-tissue/toilet-and-facial-tissue.component';
import {ToiletAndCarcareComponent} from './household-items/toilet-and-carcare/toilet-and-carcare.component';
import {HandwashAndSanitizersComponent} from './household-items/handwash-and-sanitizers/handwash-and-sanitizers.component';
import {InsecticidesAndRatTrapsComponent} from './household-items/insecticides-and-rat-traps/insecticides-and-rat-traps.component';
import {AirFreshnersAndFragrancesComponent} from './household-items/air-freshners-and-fragrances/air-freshners-and-fragrances.component';
import {WasteBinsAndBinBagsComponent} from './household-items/waste-bins-and-bin-bags/waste-bins-and-bin-bags.component';
// tslint:disable-next-line:max-line-length
import {BatteriesSocketPlugsLightbulbsComponent} from './household-items/batteries-socket-plugs-lightbulbs/batteries-socket-plugs-lightbulbs.component';
import {HomeDecorAndBeddingsComponent} from './household-items/home-decor-and-beddings/home-decor-and-beddings.component';
import {HomeFurnitureComponent} from './household-items/home-furniture/home-furniture.component';
import {ShoePolishAndFragrancesComponent} from './household-items/shoe-polish-and-fragrances/shoe-polish-and-fragrances.component';
import {PetsComponent} from './household-items/pets/pets.component';
import {KitchenAndDiningHomeComponent} from './kitchen-and-dining/kitchen-and-dining-home/kitchen-and-dining-home.component';
// tslint:disable-next-line:max-line-length
import {KitchenTowelsAndServiettesComponent} from './kitchen-and-dining/kitchen-towels-and-serviettes/kitchen-towels-and-serviettes.component';
import {FoilAndClingFilmComponent} from './kitchen-and-dining/foil-and-cling-film/foil-and-cling-film.component';
import {FreezerAndSandwichBagsComponent} from './kitchen-and-dining/freezer-and-sandwich-bags/freezer-and-sandwich-bags.component';
import {StorageAndOrganizationComponent} from './kitchen-and-dining/storage-and-organization/storage-and-organization.component';
import {BakewareAndCookwareComponent} from './kitchen-and-dining/bakeware-and-cookware/bakeware-and-cookware.component';
import {KitchenUtensilsComponent} from './kitchen-and-dining/kitchen-utensils/kitchen-utensils.component';
import {NylonBagsAndCarrySacksComponent} from './kitchen-and-dining/nylon-bags-and-carry-sacks/nylon-bags-and-carry-sacks.component';
import {FoodContainersComponent} from './kitchen-and-dining/food-containers/food-containers.component';
// tslint:disable-next-line:max-line-length
import {GiftItemsAndSouvenirsHomeComponent} from './gift-items-and-souvenirs/gift-items-and-souvenirs-home/gift-items-and-souvenirs-home.component';
import {BirthdayGiftsComponent} from './gift-items-and-souvenirs/birthday-gifts/birthday-gifts.component';
import {ChristmasGiftsComponent} from './gift-items-and-souvenirs/christmas-gifts/christmas-gifts.component';
import {PartySuppliesComponent} from './gift-items-and-souvenirs/party-supplies/party-supplies.component';
import {HampersComponent} from './gift-items-and-souvenirs/hampers/hampers.component';
import {SpecialOccasionComponent} from './gift-items-and-souvenirs/special-occasion/special-occasion.component';
import {RestaurantAtHomeComponent} from './restaurant-at-home/restaurant-at-home/restaurant-at-home.component';
import {BreakfastComponent} from './restaurant-at-home/breakfast/breakfast.component';
import {LunchAndDinnerComponent} from './restaurant-at-home/lunch-and-dinner/lunch-and-dinner.component';
import {SnacksComponent} from './restaurant-at-home/snacks/snacks.component';
import {StreetFoodComponent} from './restaurant-at-home/street-food/street-food.component';
import {SoupComponent} from './restaurant-at-home/soup/soup.component';
import {LaundryAndCarcareComponent} from './household-items/laundry-and-carcare/laundry-and-carcare.component';
import {CategoryHomeComponent} from './category-home/category-home.component';
import {SearchComponent} from './search/search.component';
import {SingleProductComponent} from './single-product/single-product.component';
import {SubCategoryComponent} from './sub-category/sub-category.component';
import {CartDetailsComponent} from './cart-details/cart-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: ProductDashboardComponent },

  { path: 'herbs', component: CategoryHomeComponent, data: { category: 'herbs' } },
  { path: 'herbs/culinary', component: CulinaryComponent },
  { path: 'herbs/spices', component: SpicesComponent },
  { path: 'herbs/herbs-home', component: HerbsHomeComponent },

  { path: 'meats', component: CategoryHomeComponent, data: { category: 'meats' } },
  { path: 'meats/fresh-cow-meat', component: FreshCowMeatComponent },
  { path: 'meats/fresh-goat-and-ram-meat', component: FreshGoatAndRamMeatComponent },
  { path: 'meats/fresh-poultry-meat', component: FreshPoultryMeatComponent },
  { path: 'meats/frozen-meat', component: FrozenMeatComponent },
  { path: 'meats/pork', component: PorkComponent },
  { path: 'meats/meats-home', component: MeatsHomeComponent },

  { path: 'food-cupboard', component: CategoryHomeComponent, data: { category: 'food cupboard'} },
  { path: 'food-cupboard/beans-rice-grains', component: BeansRiceGrainsComponent },
  { path: 'food-cupboard/beverages-and-drinks', component: BeveragesAndDrinksComponent },
  { path: 'food-cupboard/breakfast-cereals', component: BreakfastCerealsComponent },
  { path: 'food-cupboard/cake-beancake-pancake-bread', component: CakeBeancakePancakeBreadComponent },
  { path: 'food-cupboard/canned-food', component: CannedFoodComponent },
  { path: 'food-cupboard/custard-syrup-pap', component: CustardSyrupPapComponent },
  { path: 'food-cupboard/dairy-cheese-egg', component: DairyCheeseEggComponent },
  { path: 'food-cupboard/ham-sausage-hotdog', component: HamSausageHotdogComponent },
  { path: 'food-cupboard/jam-spread-margarine-vinegar', component: JamSpreadMargarineVinegarComponent },
  { path: 'food-cupboard/olive-and-picks', component: OliveAndPicksComponent },
  { path: 'food-cupboard/oil', component: OilComponent },
  { path: 'food-cupboard/pasta-and-noodles', component: PastaAndNoodlesComponent },
  { path: 'food-cupboard/salad-dressing-soups-sauces', component: SaladDressingSoupsSaucesComponent },
  { path: 'food-cupboard/swallow', component: SwallowComponent },
  { path: 'food-cupboard/sugar-sweetner-honey', component: SugarSweetnerHoneyComponent },

  { path: 'fruits-and-vegetables', component: CategoryHomeComponent, data: { category: 'fruits and vegetables'} },
  { path: 'fruits-and-vegetables/fresh-fruit', component: FreshFruitsComponent },
  { path: 'fruits-and-vegetables/fresh-vegetables', component: FreshVegetablesComponent },
  { path: 'fruits-and-vegetables/frozen-fruits-and-vegetables', component: FrozenFruitsAndVegetablesComponent },

  { path: 'naija-food', component: CategoryHomeComponent, data: { category: 'naija food'} },
  { path: 'naija-food/naija-snacks', component: NaijaSnacksComponent },
  { path: 'naija-food/naija-spices-and-condiments', component: NaijaSpicesAndCondimentsComponent },
  { path: 'naija-food/naija-tubers', component: NaijaTubersComponent },
  { path: 'naija-food/naija-vegetables', component: NaijaVegetablesComponent },

  { path: 'snacks', component: CategoryHomeComponent, data: { category: 'snacks'} },
  { path: 'snacks/beef-rolls-and-cakes', component: BeefRollsAndCakesComponent },
  { path: 'snacks/biscuits-and-wafers', component: BisucuitsAndWafersComponent },
  { path: 'snacks/candy-and-chewing-gum', component: CandyAndChewingGumComponent },
  { path: 'snacks/chocolates-and-cookies', component: ChocolatesAndCookiesComponent },
  { path: 'snacks/energy-and-granola-bars', component: EnergyAndGranolaBarsComponent },
  { path: 'snacks/nuts-and-dried-fruits', component: NutsAndDriedFruitsComponent },
  { path: 'snacks/popcorn', component: PopcornComponent },
  { path: 'snacks/potato-and-plantain-chips', component: PotatoAndPlantainChipsComponent },

  { path: 'household-items', component: CategoryHomeComponent, data: { category: 'household items'} },
  { path: 'household-items/toilet-and-facial-tissue', component: ToiletAndFacialTissueComponent },
  { path: 'household-items/laundry-and-carcare', component: LaundryAndCarcareComponent },
  { path: 'household-items/handwash-and-sanitizers', component: HandwashAndSanitizersComponent },
  { path: 'household-items/insecticides-and-rat-traps', component: InsecticidesAndRatTrapsComponent },
  { path: 'household-items/air-freshners-and-fragrances', component: AirFreshnersAndFragrancesComponent },
  { path: 'household-items/waste-bins-and-bin-bags', component: WasteBinsAndBinBagsComponent },
  { path: 'household-items/batteries-sockets-plugs-light-bulbs', component: BatteriesSocketPlugsLightbulbsComponent },
  { path: 'household-items/home-decor-and-beddings', component: HomeDecorAndBeddingsComponent },
  { path: 'household-items/home-furniture', component: HomeFurnitureComponent },
  { path: 'household-items/shoe-polish-and-fragrances', component: ShoePolishAndFragrancesComponent },
  { path: 'household-items/pets', component: PetsComponent },

  { path: 'kitchen-and-dining', component: CategoryHomeComponent, data: { category: 'kitchen and dining'} },
  { path: 'kitchen-and-dining/kitchen-towels-and-serviettes', component: KitchenTowelsAndServiettesComponent },
  { path: 'kitchen-and-dining/foil-and-cling-film', component: FoilAndClingFilmComponent },
  { path: 'kitchen-and-dining/freezer-and-sandwich-bags', component: FreezerAndSandwichBagsComponent },
  { path: 'kitchen-and-dining/storage-and-organization', component: StorageAndOrganizationComponent },
  { path: 'kitchen-and-dining/bakeware-and-cookware', component: BakewareAndCookwareComponent },
  { path: 'kitchen-and-dining/kitchen-utensils', component: KitchenUtensilsComponent },
  { path: 'kitchen-and-dining/nylon-bags-and-carry-sacks', component: NylonBagsAndCarrySacksComponent },
  { path: 'kitchen-and-dining/food-containers', component: FoodContainersComponent },

  { path: 'gift-items-and-souvenirs', component: CategoryHomeComponent, data: { category: 'gift items and souvenirs'} },
  { path: 'gift-items-and-souvenirs/birthday-gifts', component: BirthdayGiftsComponent },
  { path: 'gift-items-and-souvenirs/christmas-gifts', component: ChristmasGiftsComponent },
  { path: 'gift-items-and-souvenirs/party-supplies', component: PartySuppliesComponent },
  { path: 'gift-items-and-souvenirs/hampers', component: HampersComponent },
  { path: 'gift-items-and-souvenirs/special-occasion', component: SpecialOccasionComponent },

  { path: 'restaurant-at-home', component: CategoryHomeComponent, data: { category: 'restaurant at home'} },
  { path: 'restaurant-at-home/breakfast', component: BreakfastComponent },
  { path: 'restaurant-at-home/lunch-and-dinner', component: LunchAndDinnerComponent },
  { path: 'restaurant-at-home/snacks', component: SnacksComponent },
  { path: 'restaurant-at-home/soup', component: SoupComponent },
  { path: 'restaurant-at-home/street-food', component: StreetFoodComponent },

  { path: 'product-details/:id', component: SingleProductComponent },
  { path: 'sub-category/:name', component: SubCategoryComponent },
  { path: 'cart-details', component: CartDetailsComponent },

  { path: 'search', component: SearchComponent },


  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
