import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPatientDataComponent } from './display-patient-data.component';

describe('DisplayPatientDataComponent', () => {
  let component: DisplayPatientDataComponent;
  let fixture: ComponentFixture<DisplayPatientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPatientDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPatientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
