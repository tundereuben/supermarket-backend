import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOccasionComponent } from './special-occasion.component';

describe('SpecialOccasionComponent', () => {
  let component: SpecialOccasionComponent;
  let fixture: ComponentFixture<SpecialOccasionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialOccasionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialOccasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
