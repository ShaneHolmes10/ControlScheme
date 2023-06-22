import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputControlPanelComponent } from './input-control-panel.component';

describe('InputControlPanelComponent', () => {
  let component: InputControlPanelComponent;
  let fixture: ComponentFixture<InputControlPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputControlPanelComponent]
    });
    fixture = TestBed.createComponent(InputControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
