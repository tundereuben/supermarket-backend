import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwallowComponent } from './swallow.component';

describe('SwallowComponent', () => {
  let component: SwallowComponent;
  let fixture: ComponentFixture<SwallowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwallowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwallowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
