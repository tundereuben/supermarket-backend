import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaAndNoodlesComponent } from './pasta-and-noodles.component';

describe('PastaAndNoodlesComponent', () => {
  let component: PastaAndNoodlesComponent;
  let fixture: ComponentFixture<PastaAndNoodlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastaAndNoodlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastaAndNoodlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
