import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletAndFacialTissueComponent } from './toilet-and-facial-tissue.component';

describe('ToiletAndFacialTissueComponent', () => {
  let component: ToiletAndFacialTissueComponent;
  let fixture: ComponentFixture<ToiletAndFacialTissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToiletAndFacialTissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToiletAndFacialTissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
