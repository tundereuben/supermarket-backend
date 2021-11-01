import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundryAndCarcareComponent } from './laundry-and-carcare.component';

describe('LaundryAndCarcareComponent', () => {
  let component: LaundryAndCarcareComponent;
  let fixture: ComponentFixture<LaundryAndCarcareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaundryAndCarcareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaundryAndCarcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
