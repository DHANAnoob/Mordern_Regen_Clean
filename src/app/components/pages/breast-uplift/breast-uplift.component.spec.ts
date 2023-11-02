import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreastUpliftComponent } from './breast-uplift.component';

describe('BreastUpliftComponent', () => {
  let component: BreastUpliftComponent;
  let fixture: ComponentFixture<BreastUpliftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreastUpliftComponent]
    });
    fixture = TestBed.createComponent(BreastUpliftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
