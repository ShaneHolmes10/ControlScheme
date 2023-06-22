import { Component } from '@angular/core';

@Component({
  selector: 'app-orientation-guage-output',
  templateUrl: './orientation-guage-output.component.html',
  styleUrls: ['./orientation-guage-output.component.css']
})
export class OrientationGuageOutputComponent {
  value: number = 0;
  guageStyle: string = "transform: rotate("+(this.value / 100)*360+"deg);";

  constructor() {
    this.setGuage(0);
  }

  setGuage(value: number) {
    this.value = value;
    this.guageStyle = "transform: rotate("+(this.value / 100)*360+"deg);";
  }
}
