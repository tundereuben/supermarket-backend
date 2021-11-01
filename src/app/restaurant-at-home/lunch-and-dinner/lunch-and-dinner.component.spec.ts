import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchAndDinnerComponent } from './lunch-and-dinner.component';

describe('LunchAndDinnerComponent', () => {
  let component: LunchAndDinnerComponent;
  let fixture: ComponentFixture<LunchAndDinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchAndDinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchAndDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
