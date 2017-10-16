import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  user = {
    power:''
  }
  val = '1';
  calculatePower(){
    console.log("powerlevel", this.user.power);
    this.val = this.user.power;
  }
  constructor() { }

  ngOnInit() {
  }

}
