import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenMeatComponent } from './frozen-meat.component';

describe('FrozenMeatComponent', () => {
  let component: FrozenMeatComponent;
  let fixture: ComponentFixture<FrozenMeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrozenMeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
