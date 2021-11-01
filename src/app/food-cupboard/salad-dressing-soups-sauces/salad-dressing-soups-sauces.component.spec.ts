import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladDressingSoupsSaucesComponent } from './salad-dressing-soups-sauces.component';

describe('SaladDressingSoupsSaucesComponent', () => {
  let component: SaladDressingSoupsSaucesComponent;
  let fixture: ComponentFixture<SaladDressingSoupsSaucesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaladDressingSoupsSaucesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladDressingSoupsSaucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
