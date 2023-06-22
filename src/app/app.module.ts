import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { StrafeControlComponent } from './strafe-control/strafe-control.component';
import { AltitudeControlComponent } from './altitude-control/altitude-control.component';
import { YawControlComponent } from './yaw-control/yaw-control.component';
import { FunctionControlComponent } from './function-control/function-control.component';
import { InputControlPanelComponent } from './input-control-panel/input-control-panel.component';
import { OutputPanelComponent } from './output-panel/output-panel.component';
import { SpeedGuageOutputComponent } from './speed-guage-output/speed-guage-output.component';
import { AltitudeGuageOutputComponent } from './altitude-guage-output/altitude-guage-output.component';
import { OrientationGuageOutputComponent } from './orientation-guage-output/orientation-guage-output.component';

@NgModule({
  declarations: [
    AppComponent,
    StrafeControlComponent,
    AltitudeControlComponent,
    YawControlComponent,
    FunctionControlComponent,
    InputControlPanelComponent,
    OutputPanelComponent,
    SpeedGuageOutputComponent,
    AltitudeGuageOutputComponent,
    OrientationGuageOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
