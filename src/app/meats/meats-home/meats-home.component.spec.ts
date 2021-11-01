import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatsHomeComponent } from './meats-home.component';

describe('MeatsHomeComponent', () => {
  let component: MeatsHomeComponent;
  let fixture: ComponentFixture<MeatsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeatsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
