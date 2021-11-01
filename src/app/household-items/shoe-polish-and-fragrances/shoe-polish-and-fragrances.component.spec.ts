import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoePolishAndFragrancesComponent } from './shoe-polish-and-fragrances.component';

describe('ShoePolishAndFragrancesComponent', () => {
  let component: ShoePolishAndFragrancesComponent;
  let fixture: ComponentFixture<ShoePolishAndFragrancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoePolishAndFragrancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoePolishAndFragrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
