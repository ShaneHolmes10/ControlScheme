import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPanelComponent } from './output-panel.component';

describe('OutputPanelComponent', () => {
  let component: OutputPanelComponent;
  let fixture: ComponentFixture<OutputPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputPanelComponent]
    });
    fixture = TestBed.createComponent(OutputPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
