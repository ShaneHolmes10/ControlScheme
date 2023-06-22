import { Component } from '@angular/core';

@Component({
  selector: 'app-altitude-guage-output',
  templateUrl: './altitude-guage-output.component.html',
  styleUrls: ['./altitude-guage-output.component.css']
})
export class AltitudeGuageOutputComponent {
  value: number = 0;
  guageStyle: string = "height:"+this.value+"%";

  constructor() {
    this.setGuage(0);
  }

  setGuage(value: number) {
    this.value = value;
    this.guageStyle = "height:"+this.value+"%";
  }
}
