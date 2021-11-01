import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacksHomeComponent } from './snacks-home.component';

describe('SnacksHomeComponent', () => {
  let component: SnacksHomeComponent;
  let fixture: ComponentFixture<SnacksHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnacksHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacksHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
