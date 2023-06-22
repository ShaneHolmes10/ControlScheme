import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltitudeControlComponent } from './altitude-control.component';

describe('AltitudeControlComponent', () => {
  let component: AltitudeControlComponent;
  let fixture: ComponentFixture<AltitudeControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltitudeControlComponent]
    });
    fixture = TestBed.createComponent(AltitudeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
