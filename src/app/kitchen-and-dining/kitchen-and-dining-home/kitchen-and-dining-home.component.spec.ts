import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenAndDiningHomeComponent } from './kitchen-and-dining-home.component';

describe('KitchenAndDiningHomeComponent', () => {
  let component: KitchenAndDiningHomeComponent;
  let fixture: ComponentFixture<KitchenAndDiningHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenAndDiningHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenAndDiningHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
