import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodContainersComponent } from './food-containers.component';

describe('FoodContainersComponent', () => {
  let component: FoodContainersComponent;
  let fixture: ComponentFixture<FoodContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodContainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
