import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissueRegenComponent } from './tissue-regen.component';

describe('TissueRegenComponent', () => {
  let component: TissueRegenComponent;
  let fixture: ComponentFixture<TissueRegenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TissueRegenComponent]
    });
    fixture = TestBed.createComponent(TissueRegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
