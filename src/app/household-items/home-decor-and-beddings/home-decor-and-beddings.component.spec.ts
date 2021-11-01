import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDecorAndBeddingsComponent } from './home-decor-and-beddings.component';

describe('HomeDecorAndBeddingsComponent', () => {
  let component: HomeDecorAndBeddingsComponent;
  let fixture: ComponentFixture<HomeDecorAndBeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDecorAndBeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDecorAndBeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
