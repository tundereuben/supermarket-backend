import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CulinaryComponent } from './herbs/culinary/culinary.component';
import { SpicesComponent } from './herbs/spices/spices.component';
import { FreshFruitsComponent } from './vegetables/fresh-fruits/fresh-fruits.component';
import { FreshVegetablesComponent } from './vegetables/fresh-vegetables/fresh-vegetables.component';
import { FrozenFruitsAndVegetablesComponent } from './vegetables/frozen-fruits-and-vegetables/frozen-fruits-and-vegetables.component';
import { FreshPoultryMeatComponent } from './meats/fresh-poultry-meat/fresh-poultry-meat.component';
import { FreshCowMeatComponent } from './meats/fresh-cow-meat/fresh-cow-meat.component';
import { FreshGoatAndRamMeatComponent } from './meats/fresh-goat-and-ram-meat/fresh-goat-and-ram-meat.component';
import { FrozenMeatComponent } from './meats/frozen-meat/frozen-meat.component';
import { PorkComponent } from './meats/pork/pork.component';
import { BreakfastCerealsComponent } from './food-cupboard/breakfast-cereals/breakfast-cereals.component';
import { BeveragesAndDrinksComponent } from './food-cupboard/beverages-and-drinks/beverages-and-drinks.component';
import { BeansRiceGrainsComponent } from './food-cupboard/beans-rice-grains/beans-rice-grains.component';
import { CustardSyrupPapComponent } from './food-cupboard/custard-syrup-pap/custard-syrup-pap.component';
import { CakeBeancakePancakeBreadComponent } from './food-cupboard/cake-beancake-pancake-bread/cake-beancake-pancake-bread.component';
import { CannedFoodComponent } from './food-cupboard/canned-food/canned-food.component';
import { DairyCheeseEggComponent } from './food-cupboard/dairy-cheese-egg/dairy-cheese-egg.component';
import { HamSausageHotdogComponent } from './food-cupboard/ham-sausage-hotdog/ham-sausage-hotdog.component';
import { JamSpreadMargarineVinegarComponent } from './food-cupboard/jam-spread-margarine-vinegar/jam-spread-margarine-vinegar.component';
import { OliveAndPicksComponent } from './food-cupboard/olive-and-picks/olive-and-picks.component';
import { OilComponent } from './food-cupboard/oil/oil.component';
import { PastaAndNoodlesComponent } from './food-cupboard/pasta-and-noodles/pasta-and-noodles.component';
import { SaladDressingSoupsSaucesComponent } from './food-cupboard/salad-dressing-soups-sauces/salad-dressing-soups-sauces.component';
import { SwallowComponent } from './food-cupboard/swallow/swallow.component';
import { SugarSweetnerHoneyComponent } from './food-cupboard/sugar-sweetner-honey/sugar-sweetner-honey.component';
import { NaijaVegetablesComponent } from './naija-food/naija-vegetables/naija-vegetables.component';
import { NaijaTubersComponent } from './naija-food/naija-tubers/naija-tubers.component';
import { NaijaSpicesAndCondimentsComponent } from './naija-food/naija-spices-and-condiments/naija-spices-and-condiments.component';
import { NaijaSnacksComponent } from './naija-food/naija-snacks/naija-snacks.component';
import { BisucuitsAndWafersComponent } from './snacks/bisucuits-and-wafers/bisucuits-and-wafers.component';
import { CandyAndChewingGumComponent } from './snacks/candy-and-chewing-gum/candy-and-chewing-gum.component';
import { ChocolatesAndCookiesComponent } from './snacks/chocolates-and-cookies/chocolates-and-cookies.component';
import { NutsAndDriedFruitsComponent } from './snacks/nuts-and-dried-fruits/nuts-and-dried-fruits.component';
import { PotatoAndPlantainChipsComponent } from './snacks/potato-and-plantain-chips/potato-and-plantain-chips.component';
import { PopcornComponent } from './snacks/popcorn/popcorn.component';
import { EnergyAndGranolaBarsComponent } from './snacks/energy-and-granola-bars/energy-and-granola-bars.component';
import { BeefRollsAndCakesComponent } from './snacks/beef-rolls-and-cakes/beef-rolls-and-cakes.component';
import { HerbsHomeComponent } from './herbs/herbs-home/herbs-home.component';
import { MeatsHomeComponent } from './meats/meats-home/meats-home.component';
import { NaijaFoodHomeComponent } from './naija-food/naija-food-home/naija-food-home.component';
import { SnacksHomeComponent } from './snacks/snacks-home/snacks-home.component';
import { VegetablesHomeComponent } from './vegetables/vegetables-home/vegetables-home.component';
import { FoodCupboardHomeComponent } from './food-cupboard/food-cupboard-home/food-cupboard-home.component';
import { ToiletAndFacialTissueComponent } from './household-items/toilet-and-facial-tissue/toilet-and-facial-tissue.component';
import { LaundryAndCarcareComponent } from './household-items/laundry-and-carcare/laundry-and-carcare.component';
import { HandwashAndSanitizersComponent } from './household-items/handwash-and-sanitizers/handwash-and-sanitizers.component';
import { InsecticidesAndRatTrapsComponent } from './household-items/insecticides-and-rat-traps/insecticides-and-rat-traps.component';
import { AirFreshnersAndFragrancesComponent } from './household-items/air-freshners-and-fragrances/air-freshners-and-fragrances.component';
import { WasteBinsAndBinBagsComponent } from './household-items/waste-bins-and-bin-bags/waste-bins-and-bin-bags.component';
import { BatteriesSocketPlugsLightbulbsComponent } from './household-items/batteries-socket-plugs-lightbulbs/batteries-socket-plugs-lightbulbs.component';
import { HomeDecorAndBeddingsComponent } from './household-items/home-decor-and-beddings/home-decor-and-beddings.component';
import { HomeFurnitureComponent } from './household-items/home-furniture/home-furniture.component';
import { ShoePolishAndFragrancesComponent } from './household-items/shoe-polish-and-fragrances/shoe-polish-and-fragrances.component';
import { PetsComponent } from './household-items/pets/pets.component';
import { KitchenAndDiningHomeComponent } from './kitchen-and-dining/kitchen-and-dining-home/kitchen-and-dining-home.component';
import { KitchenTowelsAndServiettesComponent } from './kitchen-and-dining/kitchen-towels-and-serviettes/kitchen-towels-and-serviettes.component';
import { FoilAndClingFilmComponent } from './kitchen-and-dining/foil-and-cling-film/foil-and-cling-film.component';
import { FreezerAndSandwichBagsComponent } from './kitchen-and-dining/freezer-and-sandwich-bags/freezer-and-sandwich-bags.component';
import { StorageAndOrganizationComponent } from './kitchen-and-dining/storage-and-organization/storage-and-organization.component';
import { BakewareAndCookwareComponent } from './kitchen-and-dining/bakeware-and-cookware/bakeware-and-cookware.component';
import { KitchenUtensilsComponent } from './kitchen-and-dining/kitchen-utensils/kitchen-utensils.component';
import { NylonBagsAndCarrySacksComponent } from './kitchen-and-dining/nylon-bags-and-carry-sacks/nylon-bags-and-carry-sacks.component';
import { FoodContainersComponent } from './kitchen-and-dining/food-containers/food-containers.component';
import { GiftItemsAndSouvenirsHomeComponent } from './gift-items-and-souvenirs/gift-items-and-souvenirs-home/gift-items-and-souvenirs-home.component';
import { BirthdayGiftsComponent } from './gift-items-and-souvenirs/birthday-gifts/birthday-gifts.component';
import { ChristmasGiftsComponent } from './gift-items-and-souvenirs/christmas-gifts/christmas-gifts.component';
import { PartySuppliesComponent } from './gift-items-and-souvenirs/party-supplies/party-supplies.component';
import { HampersComponent } from './gift-items-and-souvenirs/hampers/hampers.component';
import { SpecialOccasionComponent } from './gift-items-and-souvenirs/special-occasion/special-occasion.component';
import { RestaurantAtHomeComponent } from './restaurant-at-home/restaurant-at-home/restaurant-at-home.component';
import { BreakfastComponent } from './restaurant-at-home/breakfast/breakfast.component';
import { LunchAndDinnerComponent } from './restaurant-at-home/lunch-and-dinner/lunch-and-dinner.component';
import { SnacksComponent } from './restaurant-at-home/snacks/snacks.component';
import { SoupComponent } from './restaurant-at-home/soup/soup.component';
import { StreetFoodComponent } from './restaurant-at-home/street-food/street-food.component';
import { HouseholdItemsComponent } from './household-items/household-items/household-items.component';
import { ToiletAndCarcareComponent } from './household-items/toilet-and-carcare/toilet-and-carcare.component';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { SearchComponent } from './search/search.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductDashboardComponent,
    PageNotFoundComponent,
    CulinaryComponent,
    SpicesComponent,
    FreshFruitsComponent,
    FreshVegetablesComponent,
    FrozenFruitsAndVegetablesComponent,
    FreshPoultryMeatComponent,
    FreshCowMeatComponent,
    FreshGoatAndRamMeatComponent,
    FrozenMeatComponent,
    PorkComponent,
    BreakfastCerealsComponent,
    BeveragesAndDrinksComponent,
    BeansRiceGrainsComponent,
    CustardSyrupPapComponent,
    CakeBeancakePancakeBreadComponent,
    CannedFoodComponent,
    DairyCheeseEggComponent,
    HamSausageHotdogComponent,
    JamSpreadMargarineVinegarComponent,
    OliveAndPicksComponent,
    OilComponent,
    PastaAndNoodlesComponent,
    SaladDressingSoupsSaucesComponent,
    SwallowComponent,
    SugarSweetnerHoneyComponent,
    NaijaVegetablesComponent,
    NaijaTubersComponent,
    NaijaSpicesAndCondimentsComponent,
    NaijaSnacksComponent,
    BisucuitsAndWafersComponent,
    CandyAndChewingGumComponent,
    ChocolatesAndCookiesComponent,
    NutsAndDriedFruitsComponent,
    PotatoAndPlantainChipsComponent,
    PopcornComponent,
    EnergyAndGranolaBarsComponent,
    BeefRollsAndCakesComponent,
    HerbsHomeComponent,
    MeatsHomeComponent,
    NaijaFoodHomeComponent,
    SnacksHomeComponent,
    VegetablesHomeComponent,
    FoodCupboardHomeComponent,
    ToiletAndFacialTissueComponent,
    LaundryAndCarcareComponent,
    HandwashAndSanitizersComponent,
    InsecticidesAndRatTrapsComponent,
    AirFreshnersAndFragrancesComponent,
    WasteBinsAndBinBagsComponent,
    BatteriesSocketPlugsLightbulbsComponent,
    HomeDecorAndBeddingsComponent,
    HomeFurnitureComponent,
    ShoePolishAndFragrancesComponent,
    PetsComponent,
    KitchenAndDiningHomeComponent,
    KitchenTowelsAndServiettesComponent,
    FoilAndClingFilmComponent,
    FreezerAndSandwichBagsComponent,
    StorageAndOrganizationComponent,
    BakewareAndCookwareComponent,
    KitchenUtensilsComponent,
    NylonBagsAndCarrySacksComponent,
    FoodContainersComponent,
    GiftItemsAndSouvenirsHomeComponent,
    BirthdayGiftsComponent,
    ChristmasGiftsComponent,
    PartySuppliesComponent,
    HampersComponent,
    SpecialOccasionComponent,
    RestaurantAtHomeComponent,
    BreakfastComponent,
    LunchAndDinnerComponent,
    SnacksComponent,
    SoupComponent,
    StreetFoodComponent,
    HouseholdItemsComponent,
    ToiletAndCarcareComponent,
    CategoryHomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
