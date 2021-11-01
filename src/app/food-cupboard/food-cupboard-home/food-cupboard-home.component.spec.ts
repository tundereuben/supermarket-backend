import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCupboardHomeComponent } from './food-cupboard-home.component';

describe('FoodCupboardHomeComponent', () => {
  let component: FoodCupboardHomeComponent;
  let fixture: ComponentFixture<FoodCupboardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodCupboardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCupboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
