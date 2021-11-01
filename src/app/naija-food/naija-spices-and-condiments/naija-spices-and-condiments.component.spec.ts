import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaijaSpicesAndCondimentsComponent } from './naija-spices-and-condiments.component';

describe('NaijaSpicesAndCondimentsComponent', () => {
  let component: NaijaSpicesAndCondimentsComponent;
  let fixture: ComponentFixture<NaijaSpicesAndCondimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaijaSpicesAndCondimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaijaSpicesAndCondimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
