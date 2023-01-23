import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Howl, Howler } from 'howler';
import { GlobalService, SoundsEffectsService } from 'src/app/services/index';


@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.sass']
})
export class BeginComponent implements OnInit, OnDestroy {


  lightSpeed: boolean = false;
  landingPlanet: boolean = false;

  EntradalightSpeed: boolean = false;
  saludos: boolean = false;

  showButton: boolean = false;

  endSaludos: boolean = false;

  counter!: { min: number, sec: number }

  @ViewChild('voz1') voz1!: ElementRef;
  @ViewChild('fondo') fondo!: ElementRef;

  efectocuadrito: boolean = false;

  letrasLogo: boolean = false;

  fondoMusica: any = new Howl({
    src: ['./assets/files/audio/audioFinal.m4a'],
    volume: 0.25,
  });



  logoVr: boolean = false;

    private timer!: any;


    activeZone: boolean;

  constructor(
    private soundsEffects: SoundsEffectsService,
    public _globalService: GlobalService,
    public router: Router
  ) {

    this.activeZone = true;

  }


  ngOnDestroy() {

    this.activeZone = false;

    this.fondoMusica.stop();
    this.fondoMusica = null;
    // this.timer = null;

    clearInterval(this.timer);
    this.timer = 0;


    // this.soundsEffects = null;



  }

  ngOnInit(): void {

    this.startTimer();
  }


  playFondo() {


    this.fondoMusica.play();


  }



  playVoz() {
    // let sound = "./assets/files/audio/voz1.mpeg";

    // if(sound && ( new Audio(sound) )){

    //   sound && ( new Audio(sound) ).play()
    // }
  }


  startTimer() {
    this.counter = { min: 0, sec: 0 } // choose whatever you want
    this.timer = setInterval(() => {
      if (this.counter.sec + 1 == +1) {
        this.counter.min += 0;
        this.counter.sec = 1
      }
      else this.counter.sec += 1
      if (this.counter.min === 0 && this.counter.sec == 0) clearInterval(this.timer)


      if (this.counter.sec == 5) {
        this.playFondo();
      }

      if(this.counter.sec == 7){

        let sound1: any = this.soundsEffects.voiceWelcome1;

        sound1.play();


      }

      if (this.counter.sec == 15) {


        this.logoVr = true;
        // this.playVoz();
      }


    //   console.log('segundos', this.counter.sec);

    }, 1000)
  }


  goViaje() {

    this.landingPlanet = true;

    let sound: any = this.soundsEffects.soundStart;
    sound.play();
    this.activeZone = false;


    let intervalId = setTimeout( async () => {


      this.router.navigate(['public/principal']);

    }, 1000);


  }




  async animacionStart($event: any) {

    if(this.activeZone = false){

      return;

    }


    let animationName = $event.animationName;
    let classList = $event.target.classList;


    // console.log('evento inicia', $event);

    if (animationName == 'scale-out-center' && classList.contains('section')) {


      let counter = { min: 0, sec: 0 } // choose whatever you want
      let intervalId = setInterval(() => {
        if (counter.sec + 1 == +1) {
          counter.min += 0;
          counter.sec = 1
        }
        else counter.sec += 1
        if (counter.min === 0 && counter.sec == 0) clearInterval(intervalId)


        if (counter.sec == 2) {
          // this.playFondo();
          this.EntradalightSpeed = true;
        }




      }, 1000)


      await this._globalService.sleep(2000);
      this.EntradalightSpeed = true;



      // this.EntradalightSpeed = true;

    }

    if( animationName == 'slide-in-elliptic-top-fwd' && classList.contains('imgLogo') ){



    }

    if (animationName == 'dash' && classList.contains('text-stroke-2')) {

      let sound2: any = this.soundsEffects.voiceWelcome2;
      await this.sleep(2000);
      sound2.play();

      // sound2.on('end', () => {

      //   this.welcome2();

      // });


    }

    if (animationName == 'enterVr' ) {

      this.showButton = true;

      let sound3: any = this.soundsEffects.voiceWelcome3;

      sound3.play();

    }


  }

  async animacionEnd($event: any) {


    if(this.activeZone = false){

      return;

    }

    let animationName = $event.animationName;
    let classList = $event.target.classList;

    console.log('Animacion termina', {
        animationName,
        classList: classList
    });

    if (animationName.includes('scale-out-center') && classList.contains('section')) {

      let counter = { min: 0, sec: 0 } // choose whatever you want

      let intervalId = setInterval(() => {

        if (counter.sec + 1 == +1) {
          counter.min += 0;
          counter.sec = 1
        }

        else counter.sec += 1

        if (counter.min === 0 && counter.sec == 0) clearInterval(intervalId)

        if (counter.sec == 4) {
          // this.playFondo();
          this.landingPlanet = true;

        }

      }, 1000)

      await this._globalService.sleep(4000);
      this.landingPlanet = true;

    }

    if (animationName.includes('dash') && classList.contains('text-stroke-2')) {

      let sound2: any = this.soundsEffects.voiceWelcome2;

      sound2.play();




    }
    if (animationName.includes('beginOut') ){

      let sound2: any = this.soundsEffects.voiceWelcome2;

      sound2.play();


      this.router.navigate(['/public/principal']);




    }
    if (animationName.includes('enterVr') ) {

      this.showButton = true;

      let sound3: any = this.soundsEffects.voiceWelcome3;

      sound3.play();

    }




    if (animationName.includes('slide-in-elliptic-top-fwd') && classList.contains('imgLogo')) {
        console.log('aqui se deberia ir logo');
      this.showSaludos();
      this.welcome1();

      // let sound1: any = this.soundsEffects.voiceWelcome1;

      // sound1.play();

      // // this.letrasLogo = true;
      // sound1.on('end', () => {


        // let sound2: any = this.soundsEffects.voiceWelcome2;

        // sound2.play();

      //   this.welcome1();

      // });


    }

    // console.log('termina evento'$event);

  }

  welcome2(){

    this.showSaludos();

  }


  welcome1(){


    this.letrasLogo = true;
    console.log('letras logo', this.letrasLogo);


  }

  sleep(ms: number) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }


  async showSaludos() {


    this.saludos = true;
    // let time = await setTimeout(() => {


  }


  async finSaludos($event: any){

    this.endSaludos = true;



    // this.soundsEffects.voiceWelcome.play();

  }


  goLandingPlanet($event: any) {


    if ($event == true) {

      this.landingPlanet = true;

      // console.log('activado landing');

    }


  }



  endLanding($event: any) {




  }




  skipeIntro(){


    this.router.navigate(['/public/principal'], { queryParams: { skip: '1' } });
    // this.router.navigate( ['/public/principal'] );

  }

}
