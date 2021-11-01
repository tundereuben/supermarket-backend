import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesAndDrinksComponent } from './beverages-and-drinks.component';

describe('BeveragesAndDrinksComponent', () => {
  let component: BeveragesAndDrinksComponent;
  let fixture: ComponentFixture<BeveragesAndDrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeveragesAndDrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeveragesAndDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
