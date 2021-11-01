import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoAndPlantainChipsComponent } from './potato-and-plantain-chips.component';

describe('PotatoAndPlantainChipsComponent', () => {
  let component: PotatoAndPlantainChipsComponent;
  let fixture: ComponentFixture<PotatoAndPlantainChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotatoAndPlantainChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoAndPlantainChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
