
import { Component, OnInit, OnDestroy } from '@angular/core';

import {Howl, Howler} from 'howler';


import { fadeAnimation } from 'src/app/animations/animations.index';


// import { fadeAnimation } from 'src/app/animations/fadeIn.animation';

@Component({

  selector: 'app-recorrido',
  templateUrl: './recorrido.component.html',
  styleUrls: ['./recorrido.component.sass'],
  // animations: [fadeAnimation] // register the animation
})


export class RecorridoComponent implements OnInit, OnDestroy {

  volumen: number = 0.350;

  counter: any = null;

  sound: any = new Howl({
    src: ['./assets/files/audio/zarzuela.mp4'],
    loop: true,
    volume: this.volumen,

  });

  constructor() {


    console.log('recorrido componen');

  }

  ngOnDestroy() {

    this.sound.stop();

  }

  ngOnInit(): void {

  this.playFondo();
    // console.log('linea recorrido');

    this.counter = { min: 0, sec: 0 } // choose whatever you want
    let intervalId = setInterval(() => {
      if (this.counter.sec + 1 == +1) {
        this.counter.min += 0;
        this.counter.sec = 1
      }
      else this.counter.sec += 1
      if (this.counter.min === 0 && this.counter.sec == 0) clearInterval(intervalId)


      if(this.counter.sec == 11){

        console.log('bajada volumen');

        this.volumen = 0.1
        // Howler.volume(this.volumen);
        this.sound.fade(0.350, this.volumen, 2000);

      }

    }, 1000)


  }


  playFondo() {

    this.sound.play();
    console.log('sonido fondo');

  }

   getRouterOutletState(outlet: any) {

      // console.log('state', outlet.activatedRoute);

      return outlet.isActivated ? outlet.activatedRoute : '';

    }



}
