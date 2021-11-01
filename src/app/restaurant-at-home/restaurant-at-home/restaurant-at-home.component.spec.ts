import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAtHomeComponent } from './restaurant-at-home.component';

describe('RestaurantAtHomeComponent', () => {
  let component: RestaurantAtHomeComponent;
  let fixture: ComponentFixture<RestaurantAtHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantAtHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
