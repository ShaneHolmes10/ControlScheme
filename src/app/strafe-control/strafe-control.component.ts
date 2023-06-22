import { Component } from '@angular/core';
import { InputCommunicationServiceService } from '../input-communication-service.service';

@Component({
  selector: 'app-strafe-control',
  templateUrl: './strafe-control.component.html',
  styleUrls: ['./strafe-control.component.css']
})
export class StrafeControlComponent {

  msg: string = "Output";
  serv: InputCommunicationServiceService;

  constructor(service: InputCommunicationServiceService) {
    this.serv = service;
  }

  buttonForwardClick() {
    this.msg = ("SF");
    this.serv.emitButtonClick(this.msg);
  }

  buttonRightClick() {
    this.msg = ("SR");
    this.serv.emitButtonClick(this.msg);
  }

  buttonBackwardClick() {
    this.msg = ("SB");
    this.serv.emitButtonClick(this.msg);
  }

  buttonLeftClick() {
    this.msg = ("SL");
    this.serv.emitButtonClick(this.msg);
  }

}
