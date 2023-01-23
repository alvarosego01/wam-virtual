import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// import * as BABYLON from 'babylonjs';


@Component({
  selector: 'app-light-speed',
  templateUrl: './light-speed.component.html',
  styleUrls: ['./light-speed.component.sass']
})
export class LightSpeedComponent implements OnInit {

  counter: any = null;

  slow: boolean = true;

  @Input('lightSpeed') lightSpeed: boolean = false;

  @Output() endLightSpeed = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit(): void {


    this.counter = { min: 0, sec: 0 } // choose whatever you want
    let intervalId = setInterval(() => {
      if (this.counter.sec + 1 == +1) {
        this.counter.min += 0;
        this.counter.sec = 1
      }
      else this.counter.sec += 1
      if (this.counter.min === 0 && this.counter.sec == 0) clearInterval(intervalId)


      if (this.counter.sec == 6) {
        this.endLightSpeed.emit(true);
      }

    }, 1000)

  }



  goSpeed($event: any) {

    let animationName = $event.animationName;
    let classList = $event.target.classList;

    console.log('prueba inicia lights', $event);

    if (animationName == 'move' && classList.contains('wrap')) {


    }

  }


}
