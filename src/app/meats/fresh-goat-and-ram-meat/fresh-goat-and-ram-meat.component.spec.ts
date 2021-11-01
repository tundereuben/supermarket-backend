import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshGoatAndRamMeatComponent } from './fresh-goat-and-ram-meat.component';

describe('FreshGoatAndRamMeatComponent', () => {
  let component: FreshGoatAndRamMeatComponent;
  let fixture: ComponentFixture<FreshGoatAndRamMeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshGoatAndRamMeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshGoatAndRamMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
