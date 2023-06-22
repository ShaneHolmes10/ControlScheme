import { Component } from '@angular/core';
import { InputCommunicationServiceService } from '../input-communication-service.service';

@Component({
  selector: 'app-function-control',
  templateUrl: './function-control.component.html',
  styleUrls: ['./function-control.component.css']
})
export class FunctionControlComponent {
  msg:string = "Output";
  serv: InputCommunicationServiceService;

  constructor(service: InputCommunicationServiceService) {
    this.serv = service;
  }

  button1Click() {
    this.msg = ("F1");
    this.serv.emitButtonClick(this.msg);
  }

  button2Click() {
    this.msg = ("F2");
    this.serv.emitButtonClick(this.msg);
  }

  button3Click() {
    this.msg = ("F3");
    this.serv.emitButtonClick(this.msg);
  }

  button4Click() {
    this.msg = ("F4");
    this.serv.emitButtonClick(this.msg);
  }

  button5Click() {
    this.msg = ("F5");
    this.serv.emitButtonClick(this.msg);
  }

}
