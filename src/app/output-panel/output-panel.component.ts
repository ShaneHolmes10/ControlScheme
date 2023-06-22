import { Component, ViewChild } from '@angular/core';
import { InputCommunicationServiceService } from '../input-communication-service.service';
import { SpeedGuageOutputComponent } from '../speed-guage-output/speed-guage-output.component';
import { AltitudeGuageOutputComponent } from '../altitude-guage-output/altitude-guage-output.component';
import { OrientationGuageOutputComponent } from '../orientation-guage-output/orientation-guage-output.component';


@Component({
  selector: 'app-output-panel',
  templateUrl: './output-panel.component.html',
  styleUrls: ['./output-panel.component.css']
})
export class OutputPanelComponent {
  @ViewChild('speedCom') speedComRef!: SpeedGuageOutputComponent;
  @ViewChild('altitudeCom') altitudeComRef!: AltitudeGuageOutputComponent;
  @ViewChild('orientCom') orientComRef!: OrientationGuageOutputComponent;
  
  msgOutput: string;
  serv: InputCommunicationServiceService;
  facing: number;
  speed: number;

  constructor(service: InputCommunicationServiceService) {
    this.serv = service;
    this.msgOutput = "Output";
    this.facing = 0;
    this.speed = 0;
  }

  ngOnInit(): void {
    this.serv.buttonClick$.subscribe((input: string) => {
      this.msgOutput = input;
      this.controlCondition(this.msgOutput);

    });
  }


  controlCondition(msg: string) {
    if(msg == "AU") {
      let num = this.altitudeComRef.value;
      if(num >= 0 && num < 100) {
        this.altitudeComRef.setGuage(num+5);
      }

    } else if(msg == "AD") {
      let num = this.altitudeComRef.value;
      if(num > 0 && num <= 100) {
        this.altitudeComRef.setGuage(num-5);
      }

    } else if(msg == "YL") {
      this.facing = (((this.facing-10) % 100) + 100) % 100;
      this.orientComRef.setGuage(this.facing);
      
    } else if(msg == "YR") {
      this.facing = (((this.facing+10) % 100) + 100) % 100;
      this.orientComRef.setGuage(this.facing);

    } else if(msg == "SF") {
      let num = this.speed;
      if(num >= 0 && num <= 100) {
        this.speed += 5;
      }
      if(this.speed < 0) {
        this.speed = 0;
      } else if(this.speed > 100) {
        this.speed = 100;
      }

      this.speedComRef.setGuage(this.speed);

    } else if(msg == "SR") {
      

    } else if(msg == "SB") {
      let num = this.speed;
      if(num >=0 && num <= 100) {
        this.speed -= 5;
      }
      if(this.speed < 0) {
        this.speed = 0;
      } else if(this.speed > 100) {
        this.speed = 100;
      }

      this.speedComRef.setGuage(this.speed);

    } else if(msg == "SL") {

    } 
  }


}
