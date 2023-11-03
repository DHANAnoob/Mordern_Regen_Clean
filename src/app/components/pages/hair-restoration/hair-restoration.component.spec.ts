import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairRestorationComponent } from './hair-restoration.component';

describe('HairRestorationComponent', () => {
  let component: HairRestorationComponent;
  let fixture: ComponentFixture<HairRestorationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HairRestorationComponent]
    });
    fixture = TestBed.createComponent(HairRestorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
