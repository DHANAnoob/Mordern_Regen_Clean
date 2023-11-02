import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfFillersComponent } from './prf-fillers.component';

describe('PrfFillersComponent', () => {
  let component: PrfFillersComponent;
  let fixture: ComponentFixture<PrfFillersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrfFillersComponent]
    });
    fixture = TestBed.createComponent(PrfFillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
