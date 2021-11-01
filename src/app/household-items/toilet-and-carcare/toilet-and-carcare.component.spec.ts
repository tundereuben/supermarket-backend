import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletAndCarcareComponent } from './toilet-and-carcare.component';

describe('ToiletAndCarcareComponent', () => {
  let component: ToiletAndCarcareComponent;
  let fixture: ComponentFixture<ToiletAndCarcareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToiletAndCarcareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToiletAndCarcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
