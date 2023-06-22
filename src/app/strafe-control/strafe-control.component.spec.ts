import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrafeControlComponent } from './strafe-control.component';

describe('StrafeControlComponent', () => {
  let component: StrafeControlComponent;
  let fixture: ComponentFixture<StrafeControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrafeControlComponent]
    });
    fixture = TestBed.createComponent(StrafeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
