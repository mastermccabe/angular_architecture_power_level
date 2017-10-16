import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  val :number;
  calculatePower(){
    console.log("powerlevel", this.val);

  }
  constructor() { }

  ngOnInit() {
    this.val = 1;
  }

}
