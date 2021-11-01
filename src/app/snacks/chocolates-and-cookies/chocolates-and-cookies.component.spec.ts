import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolatesAndCookiesComponent } from './chocolates-and-cookies.component';

describe('ChocolatesAndCookiesComponent', () => {
  let component: ChocolatesAndCookiesComponent;
  let fixture: ComponentFixture<ChocolatesAndCookiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocolatesAndCookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolatesAndCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
