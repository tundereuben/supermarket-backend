import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeBeancakePancakeBreadComponent } from './cake-beancake-pancake-bread.component';

describe('CakeBeancakePancakeBreadComponent', () => {
  let component: CakeBeancakePancakeBreadComponent;
  let fixture: ComponentFixture<CakeBeancakePancakeBreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeBeancakePancakeBreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeBeancakePancakeBreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
