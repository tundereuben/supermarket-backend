import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenFruitsAndVegetablesComponent } from './frozen-fruits-and-vegetables.component';

describe('FrozenFruitsAndVegetablesComponent', () => {
  let component: FrozenFruitsAndVegetablesComponent;
  let fixture: ComponentFixture<FrozenFruitsAndVegetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrozenFruitsAndVegetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenFruitsAndVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
