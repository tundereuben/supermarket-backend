import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageAndOrganizationComponent } from './storage-and-organization.component';

describe('StorageAndOrganizationComponent', () => {
  let component: StorageAndOrganizationComponent;
  let fixture: ComponentFixture<StorageAndOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageAndOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageAndOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
