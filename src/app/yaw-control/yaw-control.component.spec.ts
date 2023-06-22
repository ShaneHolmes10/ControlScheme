import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YawControlComponent } from './yaw-control.component';

describe('YawControlComponent', () => {
  let component: YawControlComponent;
  let fixture: ComponentFixture<YawControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YawControlComponent]
    });
    fixture = TestBed.createComponent(YawControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
