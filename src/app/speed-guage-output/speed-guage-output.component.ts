import { Component } from '@angular/core';

@Component({
  selector: 'app-speed-guage-output',
  templateUrl: './speed-guage-output.component.html',
  styleUrls: ['./speed-guage-output.component.css']
})
export class SpeedGuageOutputComponent {

  value: number = 0;
  guageStyle: string = "transform: rotate("+this.value/200+"turn);";

  constructor() {
    this.setGuage(0);
  }

  setGuage(value: number) {
    this.value = value;
    this.guageStyle = "transform: rotate("+this.value/200+"turn);";
  }

}
