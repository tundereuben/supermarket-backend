import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyAndChewingGumComponent } from './candy-and-chewing-gum.component';

describe('CandyAndChewingGumComponent', () => {
  let component: CandyAndChewingGumComponent;
  let fixture: ComponentFixture<CandyAndChewingGumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyAndChewingGumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandyAndChewingGumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
