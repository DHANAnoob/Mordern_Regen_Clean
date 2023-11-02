import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroNeedlingComponent } from './micro-needling.component';

describe('MicroNeedlingComponent', () => {
  let component: MicroNeedlingComponent;
  let fixture: ComponentFixture<MicroNeedlingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroNeedlingComponent]
    });
    fixture = TestBed.createComponent(MicroNeedlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
