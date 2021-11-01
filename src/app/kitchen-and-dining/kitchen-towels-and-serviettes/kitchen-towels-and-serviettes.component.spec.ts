import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenTowelsAndServiettesComponent } from './kitchen-towels-and-serviettes.component';

describe('KitchenTowelsAndServiettesComponent', () => {
  let component: KitchenTowelsAndServiettesComponent;
  let fixture: ComponentFixture<KitchenTowelsAndServiettesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenTowelsAndServiettesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenTowelsAndServiettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
