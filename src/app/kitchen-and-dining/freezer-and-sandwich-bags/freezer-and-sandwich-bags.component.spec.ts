import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezerAndSandwichBagsComponent } from './freezer-and-sandwich-bags.component';

describe('FreezerAndSandwichBagsComponent', () => {
  let component: FreezerAndSandwichBagsComponent;
  let fixture: ComponentFixture<FreezerAndSandwichBagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezerAndSandwichBagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezerAndSandwichBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
