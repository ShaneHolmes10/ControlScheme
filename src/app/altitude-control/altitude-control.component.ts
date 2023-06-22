import { Component } from '@angular/core';
import { InputCommunicationServiceService } from '../input-communication-service.service';

@Component({
  selector: 'app-altitude-control',
  templateUrl: './altitude-control.component.html',
  styleUrls: ['./altitude-control.component.css']
})
export class AltitudeControlComponent {
  msg = "Output"
  serv: InputCommunicationServiceService;

  constructor(service: InputCommunicationServiceService) {
    this.serv = service;
  }

  buttonUpClick() {
    this.msg = ("AU");
    this.serv.emitButtonClick(this.msg);
  }

  buttonDownClick() {
    this.msg = ("AD");
    this.serv.emitButtonClick(this.msg);
  }

}
