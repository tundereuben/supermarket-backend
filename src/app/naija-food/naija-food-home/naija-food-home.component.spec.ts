import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaijaFoodHomeComponent } from './naija-food-home.component';

describe('NaijaFoodHomeComponent', () => {
  let component: NaijaFoodHomeComponent;
  let fixture: ComponentFixture<NaijaFoodHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaijaFoodHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaijaFoodHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
