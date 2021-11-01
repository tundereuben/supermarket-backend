import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeansRiceGrainsComponent } from './beans-rice-grains.component';

describe('BeansRiceGrainsComponent', () => {
  let component: BeansRiceGrainsComponent;
  let fixture: ComponentFixture<BeansRiceGrainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeansRiceGrainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeansRiceGrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
