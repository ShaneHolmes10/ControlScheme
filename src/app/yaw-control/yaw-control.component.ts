import { Component } from '@angular/core';
import { InputCommunicationServiceService } from '../input-communication-service.service';

@Component({
  selector: 'app-yaw-control',
  templateUrl: './yaw-control.component.html',
  styleUrls: ['./yaw-control.component.css']
})
export class YawControlComponent {
  msg: string = "Output"
  serv: InputCommunicationServiceService;

  constructor(service: InputCommunicationServiceService) {
    this.serv = service;
  }

  buttonLeftClick() {
    this.msg = ("YL");
    this.serv.emitButtonClick(this.msg);
  }

  buttonRightClick() {
    this.msg = ("YR");
    this.serv.emitButtonClick(this.msg);
  }

}
