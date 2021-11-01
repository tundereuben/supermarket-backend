import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandwashAndSanitizersComponent } from './handwash-and-sanitizers.component';

describe('HandwashAndSanitizersComponent', () => {
  let component: HandwashAndSanitizersComponent;
  let fixture: ComponentFixture<HandwashAndSanitizersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandwashAndSanitizersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandwashAndSanitizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
