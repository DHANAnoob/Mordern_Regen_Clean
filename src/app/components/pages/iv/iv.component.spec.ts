import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvComponent } from './iv.component';

describe('IvComponent', () => {
  let component: IvComponent;
  let fixture: ComponentFixture<IvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IvComponent]
    });
    fixture = TestBed.createComponent(IvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
