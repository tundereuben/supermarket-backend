import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftItemsAndSouvenirsHomeComponent } from './gift-items-and-souvenirs-home.component';

describe('GiftItemsAndSouvenirsHomeComponent', () => {
  let component: GiftItemsAndSouvenirsHomeComponent;
  let fixture: ComponentFixture<GiftItemsAndSouvenirsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftItemsAndSouvenirsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftItemsAndSouvenirsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
