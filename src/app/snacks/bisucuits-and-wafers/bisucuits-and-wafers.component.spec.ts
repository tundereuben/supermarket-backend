import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BisucuitsAndWafersComponent } from './bisucuits-and-wafers.component';

describe('BisucuitsAndWafersComponent', () => {
  let component: BisucuitsAndWafersComponent;
  let fixture: ComponentFixture<BisucuitsAndWafersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BisucuitsAndWafersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BisucuitsAndWafersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
