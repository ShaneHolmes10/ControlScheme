import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionControlComponent } from './function-control.component';

describe('FunctionControlComponent', () => {
  let component: FunctionControlComponent;
  let fixture: ComponentFixture<FunctionControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionControlComponent]
    });
    fixture = TestBed.createComponent(FunctionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
