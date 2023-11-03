import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarRegenComponent } from './scar-regen.component';

describe('ScarRegenComponent', () => {
  let component: ScarRegenComponent;
  let fixture: ComponentFixture<ScarRegenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScarRegenComponent]
    });
    fixture = TestBed.createComponent(ScarRegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
