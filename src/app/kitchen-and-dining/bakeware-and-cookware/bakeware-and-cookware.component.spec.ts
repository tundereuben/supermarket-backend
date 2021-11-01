import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakewareAndCookwareComponent } from './bakeware-and-cookware.component';

describe('BakewareAndCookwareComponent', () => {
  let component: BakewareAndCookwareComponent;
  let fixture: ComponentFixture<BakewareAndCookwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakewareAndCookwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakewareAndCookwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
