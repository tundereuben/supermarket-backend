import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CannedFoodComponent } from './canned-food.component';

describe('CannedFoodComponent', () => {
  let component: CannedFoodComponent;
  let fixture: ComponentFixture<CannedFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CannedFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CannedFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
