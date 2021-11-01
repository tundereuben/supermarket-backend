import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablesHomeComponent } from './vegetables-home.component';

describe('VegetablesHomeComponent', () => {
  let component: VegetablesHomeComponent;
  let fixture: ComponentFixture<VegetablesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetablesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetablesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
