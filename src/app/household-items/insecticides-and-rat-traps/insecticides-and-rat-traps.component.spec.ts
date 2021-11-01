import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsecticidesAndRatTrapsComponent } from './insecticides-and-rat-traps.component';

describe('InsecticidesAndRatTrapsComponent', () => {
  let component: InsecticidesAndRatTrapsComponent;
  let fixture: ComponentFixture<InsecticidesAndRatTrapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsecticidesAndRatTrapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsecticidesAndRatTrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
