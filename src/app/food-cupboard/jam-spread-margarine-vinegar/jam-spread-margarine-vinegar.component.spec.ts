import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamSpreadMargarineVinegarComponent } from './jam-spread-margarine-vinegar.component';

describe('JamSpreadMargarineVinegarComponent', () => {
  let component: JamSpreadMargarineVinegarComponent;
  let fixture: ComponentFixture<JamSpreadMargarineVinegarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamSpreadMargarineVinegarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamSpreadMargarineVinegarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
