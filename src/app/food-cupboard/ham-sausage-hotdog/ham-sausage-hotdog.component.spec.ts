import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamSausageHotdogComponent } from './ham-sausage-hotdog.component';

describe('HamSausageHotdogComponent', () => {
  let component: HamSausageHotdogComponent;
  let fixture: ComponentFixture<HamSausageHotdogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamSausageHotdogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamSausageHotdogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
