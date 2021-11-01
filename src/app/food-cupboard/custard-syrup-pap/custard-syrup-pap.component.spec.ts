import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustardSyrupPapComponent } from './custard-syrup-pap.component';

describe('CustardSyrupPapComponent', () => {
  let component: CustardSyrupPapComponent;
  let fixture: ComponentFixture<CustardSyrupPapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustardSyrupPapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustardSyrupPapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
