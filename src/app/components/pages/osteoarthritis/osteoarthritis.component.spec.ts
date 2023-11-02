import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsteoarthritisComponent } from './osteoarthritis.component';

describe('OsteoarthritisComponent', () => {
  let component: OsteoarthritisComponent;
  let fixture: ComponentFixture<OsteoarthritisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsteoarthritisComponent]
    });
    fixture = TestBed.createComponent(OsteoarthritisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
