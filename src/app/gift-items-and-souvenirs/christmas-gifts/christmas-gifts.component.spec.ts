import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasGiftsComponent } from './christmas-gifts.component';

describe('ChristmasGiftsComponent', () => {
  let component: ChristmasGiftsComponent;
  let fixture: ComponentFixture<ChristmasGiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristmasGiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristmasGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
