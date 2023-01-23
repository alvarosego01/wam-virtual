

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-landing-planet',
  templateUrl: './landing-planet.component.html',
  styleUrls: ['./landing-planet.component.sass']
})


export class LandingPlanetComponent implements OnInit {

  counter: any = null;

  @Output() endLanding = new EventEmitter<Boolean>();

  constructor(

    public router: Router

  ) { }

  ngOnInit(): void {

    this.counter = { min: 0, sec: 0 } // choose whatever you want
    let intervalId = setInterval(() => {
      if (this.counter.sec + 1 == +1) {
        this.counter.min += 0;
        this.counter.sec = 1
      }
      else this.counter.sec += 1
      if (this.counter.min === 0 && this.counter.sec == 0) clearInterval(intervalId)


      if(this.counter.sec == 20){

        // console.log('travel');
        // this.router.navigate(['/public/travel']);

        // this.endLanding.emit(true);

      }

    }, 1000)

  }


  introEnd(){

    console.log('travel');
    this.router.navigate(['/public/travel']);

    this.endLanding.emit(true);

  }

}
