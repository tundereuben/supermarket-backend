import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeefRollsAndCakesComponent } from './beef-rolls-and-cakes.component';

describe('BeefRollsAndCakesComponent', () => {
  let component: BeefRollsAndCakesComponent;
  let fixture: ComponentFixture<BeefRollsAndCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeefRollsAndCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeefRollsAndCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
