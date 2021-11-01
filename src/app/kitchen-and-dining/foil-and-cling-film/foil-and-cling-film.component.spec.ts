import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoilAndClingFilmComponent } from './foil-and-cling-film.component';

describe('FoilAndClingFilmComponent', () => {
  let component: FoilAndClingFilmComponent;
  let fixture: ComponentFixture<FoilAndClingFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoilAndClingFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoilAndClingFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
