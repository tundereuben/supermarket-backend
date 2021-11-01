import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OliveAndPicksComponent } from './olive-and-picks.component';

describe('OliveAndPicksComponent', () => {
  let component: OliveAndPicksComponent;
  let fixture: ComponentFixture<OliveAndPicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OliveAndPicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OliveAndPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
