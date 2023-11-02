import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexDetoxComponent } from './dex-detox.component';

describe('DexDetoxComponent', () => {
  let component: DexDetoxComponent;
  let fixture: ComponentFixture<DexDetoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DexDetoxComponent]
    });
    fixture = TestBed.createComponent(DexDetoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
