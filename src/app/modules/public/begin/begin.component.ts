import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../../services';



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



    efectocuadrito: boolean = false;

    letrasLogo: boolean = false;



    logoVr: boolean = false;

    private timer!: any;


    activeZone: boolean;

    constructor(
        public _globalService: GlobalService,
        public router: Router
    ) {

        this.activeZone = true;

    }


    ngOnDestroy() {

        this.activeZone = false;

        clearInterval(this.timer);
        this.timer = 0;

    }

    ngOnInit(): void {

        this.startTimer();
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

            if (this.counter.sec == 15) {


                this.logoVr = true;
                // this.playVoz();
            }


            //   console.log('segundos', this.counter.sec);

        }, 1000)
    }


    async goViaje() {

        this.landingPlanet = true;

        this.activeZone = false;


        await setTimeout(async () => {

            this.router.navigate(['public/hall']);

        }, 1000);


    }




    async animacionStart($event: any) {

        if (this.activeZone = false) {

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
                    this.EntradalightSpeed = true;
                }




            }, 1000)


            await this._globalService.sleep(2000);
            this.EntradalightSpeed = true;



            // this.EntradalightSpeed = true;

        }

        if (animationName == 'slide-in-elliptic-top-fwd' && classList.contains('imgLogo')) {



        }

        if (animationName == 'dash' && classList.contains('text-stroke-2')) {


        }

        if (animationName == 'enterVr') {

            this.showButton = true;

        }


    }

    async animacionEnd($event: any) {


        if (this.activeZone = false) {

            return;

        }

        let animationName = $event.animationName;
        let classList = $event.target.classList;

        // console.log('Animacion termina', {
        //     animationName,
        //     classList: classList
        // });

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



        }
        if (animationName.includes('beginOut')) {

            this.router.navigate(['/public/principal']);

        }
        if (animationName.includes('enterVr')) {

            this.showButton = true;

        }




        if (animationName.includes('slide-in-elliptic-top-fwd') && classList.contains('imgLogo')) {
            console.log('aqui se deberia ir logo');
            this.showSaludos();
            this.welcome1();


        }

        // console.log('termina evento'$event);

    }

    welcome2() {

        this.showSaludos();

    }


    welcome1() {


        this.letrasLogo = true;

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


    async finSaludos($event: any) {

        this.endSaludos = true;


    }


    goLandingPlanet($event: any) {


        if ($event == true) {

            this.landingPlanet = true;

            // console.log('activado landing');

        }


    }



    endLanding($event: any) {




    }




    skipeIntro() {


        this.router.navigate(['/public/principal'], { queryParams: { skip: '1' } });
        // this.router.navigate( ['/public/principal'] );

    }

}
