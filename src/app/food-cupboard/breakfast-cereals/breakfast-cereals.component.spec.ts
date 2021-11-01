import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastCerealsComponent } from './breakfast-cereals.component';

describe('BreakfastCerealsComponent', () => {
  let component: BreakfastCerealsComponent;
  let fixture: ComponentFixture<BreakfastCerealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakfastCerealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastCerealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
