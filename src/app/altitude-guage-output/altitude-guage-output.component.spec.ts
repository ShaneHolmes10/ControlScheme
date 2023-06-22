import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltitudeGuageOutputComponent } from './altitude-guage-output.component';

describe('AltitudeGuageOutputComponent', () => {
  let component: AltitudeGuageOutputComponent;
  let fixture: ComponentFixture<AltitudeGuageOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltitudeGuageOutputComponent]
    });
    fixture = TestBed.createComponent(AltitudeGuageOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
