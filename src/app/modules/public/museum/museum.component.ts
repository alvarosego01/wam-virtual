import { Component, OnInit } from '@angular/core';



import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.sass']
})
export class MuseumComponent implements OnInit {




  volumen: number = 0.8;

  counter: any = null;

  sound: any = new Howl({
    src: ['./assets/files/audio/music/museum.mp3'],
    loop: true,
    volume: this.volumen,

  });

  constructor() {



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

        // console.log('bajada volumen');

        // this.volumen = 0.1
        // // Howler.volume(this.volumen);
        // this.sound.fade(0.350, this.volumen, 2000);

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
