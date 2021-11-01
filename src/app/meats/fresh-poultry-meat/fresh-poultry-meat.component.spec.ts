import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshPoultryMeatComponent } from './fresh-poultry-meat.component';

describe('FreshPoultryMeatComponent', () => {
  let component: FreshPoultryMeatComponent;
  let fixture: ComponentFixture<FreshPoultryMeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshPoultryMeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshPoultryMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
