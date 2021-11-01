import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenUtensilsComponent } from './kitchen-utensils.component';

describe('KitchenUtensilsComponent', () => {
  let component: KitchenUtensilsComponent;
  let fixture: ComponentFixture<KitchenUtensilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenUtensilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenUtensilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
