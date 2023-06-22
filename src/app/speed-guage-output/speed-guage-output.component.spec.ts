import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedGuageOutputComponent } from './speed-guage-output.component';

describe('SpeedGuageOutputComponent', () => {
  let component: SpeedGuageOutputComponent;
  let fixture: ComponentFixture<SpeedGuageOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeedGuageOutputComponent]
    });
    fixture = TestBed.createComponent(SpeedGuageOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
