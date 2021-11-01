import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdItemsComponent } from './household-items.component';

describe('HouseholdItemsComponent', () => {
  let component: HouseholdItemsComponent;
  let fixture: ComponentFixture<HouseholdItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
