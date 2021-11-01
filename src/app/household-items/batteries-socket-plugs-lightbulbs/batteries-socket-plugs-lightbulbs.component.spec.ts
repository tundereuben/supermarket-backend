import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteriesSocketPlugsLightbulbsComponent } from './batteries-socket-plugs-lightbulbs.component';

describe('BatteriesSocketPlugsLightbulbsComponent', () => {
  let component: BatteriesSocketPlugsLightbulbsComponent;
  let fixture: ComponentFixture<BatteriesSocketPlugsLightbulbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteriesSocketPlugsLightbulbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteriesSocketPlugsLightbulbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
