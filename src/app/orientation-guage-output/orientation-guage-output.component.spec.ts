import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientationGuageOutputComponent } from './orientation-guage-output.component';

describe('OrientationGuageOutputComponent', () => {
  let component: OrientationGuageOutputComponent;
  let fixture: ComponentFixture<OrientationGuageOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrientationGuageOutputComponent]
    });
    fixture = TestBed.createComponent(OrientationGuageOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
