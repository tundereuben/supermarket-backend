import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarSweetnerHoneyComponent } from './sugar-sweetner-honey.component';

describe('SugarSweetnerHoneyComponent', () => {
  let component: SugarSweetnerHoneyComponent;
  let fixture: ComponentFixture<SugarSweetnerHoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarSweetnerHoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarSweetnerHoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
