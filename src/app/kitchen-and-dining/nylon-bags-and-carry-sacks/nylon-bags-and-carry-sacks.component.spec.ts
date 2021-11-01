import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NylonBagsAndCarrySacksComponent } from './nylon-bags-and-carry-sacks.component';

describe('NylonBagsAndCarrySacksComponent', () => {
  let component: NylonBagsAndCarrySacksComponent;
  let fixture: ComponentFixture<NylonBagsAndCarrySacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NylonBagsAndCarrySacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NylonBagsAndCarrySacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
