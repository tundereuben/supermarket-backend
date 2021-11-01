import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetFoodComponent } from './street-food.component';

describe('StreetFoodComponent', () => {
  let component: StreetFoodComponent;
  let fixture: ComponentFixture<StreetFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
