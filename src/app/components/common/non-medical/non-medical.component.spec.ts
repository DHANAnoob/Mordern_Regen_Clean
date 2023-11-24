import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMedicalComponent } from './non-medical.component';

describe('NonMedicalComponent', () => {
  let component: NonMedicalComponent;
  let fixture: ComponentFixture<NonMedicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonMedicalComponent]
    });
    fixture = TestBed.createComponent(NonMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
