import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaTreatmentsComponent } from './spa-treatments.component';

describe('SpaTreatmentsComponent', () => {
  let component: SpaTreatmentsComponent;
  let fixture: ComponentFixture<SpaTreatmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaTreatmentsComponent]
    });
    fixture = TestBed.createComponent(SpaTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
