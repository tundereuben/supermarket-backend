import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayGiftsComponent } from './birthday-gifts.component';

describe('BirthdayGiftsComponent', () => {
  let component: BirthdayGiftsComponent;
  let fixture: ComponentFixture<BirthdayGiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayGiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
