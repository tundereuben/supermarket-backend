import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaijaTubersComponent } from './naija-tubers.component';

describe('NaijaTubersComponent', () => {
  let component: NaijaTubersComponent;
  let fixture: ComponentFixture<NaijaTubersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaijaTubersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaijaTubersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
