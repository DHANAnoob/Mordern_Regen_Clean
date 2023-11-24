import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSoftComponent } from './home-soft.component';

describe('HomeSoftComponent', () => {
  let component: HomeSoftComponent;
  let fixture: ComponentFixture<HomeSoftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSoftComponent]
    });
    fixture = TestBed.createComponent(HomeSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
