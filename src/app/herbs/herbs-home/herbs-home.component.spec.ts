import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbsHomeComponent } from './herbs-home.component';

describe('HerbsHomeComponent', () => {
  let component: HerbsHomeComponent;
  let fixture: ComponentFixture<HerbsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
