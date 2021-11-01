import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutsAndDriedFruitsComponent } from './nuts-and-dried-fruits.component';

describe('NutsAndDriedFruitsComponent', () => {
  let component: NutsAndDriedFruitsComponent;
  let fixture: ComponentFixture<NutsAndDriedFruitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutsAndDriedFruitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutsAndDriedFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
