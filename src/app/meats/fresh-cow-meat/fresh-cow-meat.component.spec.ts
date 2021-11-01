import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshCowMeatComponent } from './fresh-cow-meat.component';

describe('FreshCowMeatComponent', () => {
  let component: FreshCowMeatComponent;
  let fixture: ComponentFixture<FreshCowMeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshCowMeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshCowMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
