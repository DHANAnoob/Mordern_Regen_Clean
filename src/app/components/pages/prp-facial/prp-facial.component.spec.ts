import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpFacialComponent } from './prp-facial.component';

describe('PrpFacialComponent', () => {
  let component: PrpFacialComponent;
  let fixture: ComponentFixture<PrpFacialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrpFacialComponent]
    });
    fixture = TestBed.createComponent(PrpFacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
