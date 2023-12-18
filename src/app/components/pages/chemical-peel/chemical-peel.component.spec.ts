import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalPeelComponent } from './chemical-peel.component';

describe('ChemicalPeelComponent', () => {
  let component: ChemicalPeelComponent;
  let fixture: ComponentFixture<ChemicalPeelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChemicalPeelComponent]
    });
    fixture = TestBed.createComponent(ChemicalPeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
