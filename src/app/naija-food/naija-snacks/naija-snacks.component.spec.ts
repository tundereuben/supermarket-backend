import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaijaSnacksComponent } from './naija-snacks.component';

describe('NaijaSnacksComponent', () => {
  let component: NaijaSnacksComponent;
  let fixture: ComponentFixture<NaijaSnacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaijaSnacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaijaSnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
