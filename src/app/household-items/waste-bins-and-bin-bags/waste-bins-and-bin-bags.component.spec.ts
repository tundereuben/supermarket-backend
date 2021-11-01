import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteBinsAndBinBagsComponent } from './waste-bins-and-bin-bags.component';

describe('WasteBinsAndBinBagsComponent', () => {
  let component: WasteBinsAndBinBagsComponent;
  let fixture: ComponentFixture<WasteBinsAndBinBagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WasteBinsAndBinBagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WasteBinsAndBinBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
