import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyAndGranolaBarsComponent } from './energy-and-granola-bars.component';

describe('EnergyAndGranolaBarsComponent', () => {
  let component: EnergyAndGranolaBarsComponent;
  let fixture: ComponentFixture<EnergyAndGranolaBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyAndGranolaBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyAndGranolaBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
