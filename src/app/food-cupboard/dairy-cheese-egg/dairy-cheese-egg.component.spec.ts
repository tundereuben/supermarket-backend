import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyCheeseEggComponent } from './dairy-cheese-egg.component';

describe('DairyCheeseEggComponent', () => {
  let component: DairyCheeseEggComponent;
  let fixture: ComponentFixture<DairyCheeseEggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairyCheeseEggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairyCheeseEggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
