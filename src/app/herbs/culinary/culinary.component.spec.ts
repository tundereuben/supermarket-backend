import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulinaryComponent } from './culinary.component';

describe('CulinaryComponent', () => {
  let component: CulinaryComponent;
  let fixture: ComponentFixture<CulinaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulinaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
