import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirFreshnersAndFragrancesComponent } from './air-freshners-and-fragrances.component';

describe('AirFreshnersAndFragrancesComponent', () => {
  let component: AirFreshnersAndFragrancesComponent;
  let fixture: ComponentFixture<AirFreshnersAndFragrancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirFreshnersAndFragrancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirFreshnersAndFragrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
