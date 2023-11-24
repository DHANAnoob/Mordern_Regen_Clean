import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOrthoComponent } from './home-ortho.component';

describe('HomeOrthoComponent', () => {
  let component: HomeOrthoComponent;
  let fixture: ComponentFixture<HomeOrthoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeOrthoComponent]
    });
    fixture = TestBed.createComponent(HomeOrthoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
