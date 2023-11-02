import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexualHealthComponent } from './sexual-health.component';

describe('SexualHealthComponent', () => {
  let component: SexualHealthComponent;
  let fixture: ComponentFixture<SexualHealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SexualHealthComponent]
    });
    fixture = TestBed.createComponent(SexualHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
