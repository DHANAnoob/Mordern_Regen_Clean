import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpBreastComponent } from './prp-breast.component';

describe('PrpBreastComponent', () => {
  let component: PrpBreastComponent;
  let fixture: ComponentFixture<PrpBreastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrpBreastComponent]
    });
    fixture = TestBed.createComponent(PrpBreastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
