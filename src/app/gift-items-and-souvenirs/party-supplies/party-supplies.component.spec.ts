import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartySuppliesComponent } from './party-supplies.component';

describe('PartySuppliesComponent', () => {
  let component: PartySuppliesComponent;
  let fixture: ComponentFixture<PartySuppliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartySuppliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartySuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
