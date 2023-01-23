import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SoundsEffectsService } from 'src/app/services/index';

@Component({
  selector: 'app-saludos',
  templateUrl: './saludos.component.html',
  styleUrls: ['./saludos.component.sass']
})
export class SaludosComponent implements OnInit {


  @Input('saludos') saludos: boolean = false;
  @Input('endSaludos') endSaludos: boolean = false;



  @Output() finSaludos = new EventEmitter<Boolean>();

  otros: boolean = false;

  counter!: { min: number, sec: number }

  // ingles, español, chino, ruso, italiano, portuges, frances, aleman. veneco, japones, coreano, filipino, suizo, gocho, maracucho, llanero, indio (de la india), croata, bulgaro, finlandes, sueco, turco, arabe, checo, danes, catalan, gallego, noruego, polaco
  contador: number = 0;


  // Español, ingles, frances, aleman, italiano, ruso, chino

  saludosCirculo: any = [

    {
      name: "Bienvenidos",
      status: null,
      // class: 'enterText'
    },
    {
      name: "Welcome",
      status: null,
      // class: 'enterText'
    },
    {
      name: "Bienvenue",
      status: null,
      // class: 'enterText'
    },
    {
      name: "Benvenuti",
      status: null,
      // class: 'enterText'
    },

    {
      name: "Willkommen",
      status: null,
      // class: 'enterText'
    },
    {
      name: "Добро пожаловать",
      status: null,
      // class: 'enterText'
    },
    {
      name: "欢迎",
      status: null,
      // class: 'enterText'
    },

  ]

  constructor(
    private soundsEffects: SoundsEffectsService
  ) {

    // this.showSaludo();

  }

  setAnimacion() {

    let items: any = [

      "show1",
      "show2",
      "show3",
      "show4",
      "show5",
      "show6",
      "show7",

    ]
    return '';
    // return items[Math.floor(Math.random() * items.length)];
  }

  async showSaludo() {


    if( this.contador == 0 && this.saludosCirculo[ this.contador ]){

      this.saludosCirculo[ this.contador ].status = 'enter';
      // this.saludosCirculo[ this.contador ].class = "enterText";

      // let sound: any = this.soundsEffects.enterText;
//
      // sound.play();

      return;
    }

    if( this.contador > 0 && this.saludosCirculo[ this.contador ] )
    {

      let x = new Promise((resolve,reject) => {

         this.saludosCirculo.forEach((element: any, idx: any) => {

          if(idx > 0){

            this.saludosCirculo[ idx ].status = 'enter';
            // element[ idx ].class = "enterText2";


          }

        });


        resolve(true);

      });

      // await x.then(r =>{
//
        // let sound: any = this.soundsEffects.enterText;
//
        // sound.play();
//
      // });


      return;
    }




  }


  ngOnInit(): void {

    this.startTimer();

    this.showSaludo();

  }


   sleep(ms: number ) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

  async animacionEnd($event: any) {

    let animationName = $event.animationName;
    let classList = $event.target.classList;

    if (animationName.includes('enterText') && classList.contains('textWelcome')) {

      await this.sleep(1000).then();

      this.saludosCirculo[this.contador].status = "exit";


    }

    if (animationName.includes('enterText2') && classList.contains('textWelcome2')) {



      await this.sleep(1000).then();

      let x = new Promise((resolve,reject) => {

        this.saludosCirculo.forEach((element: any, idx: any) => {

         if(idx > 0){

          // console.log('prueba status', element[idx])

           this.saludosCirculo[ idx ].status = 'exit';


         }

       });


       resolve(true);

     });

     await x.then(r =>{

    });




  }

    if (animationName.includes('outText') && classList.contains('textWelcome')) {

      // this.saludosCirculo[this.contador].class = "";
      // this.saludosCirculo[this.contador].status = false;

      this.contador++;

      this.showSaludo();

    }

    if (animationName.includes('outText2') && classList.contains('textWelcome2')) {

      // this.saludosCirculo[this.contador].class = "";
      // this.saludosCirculo[this.contador].status = false;

      this.finSaludos.emit(true);


    }


  }


  startTimer() {

    this.counter = { min: 0, sec: 0 } // choose whatever you want

    let intervalId = setInterval(() => {

      if (this.counter.sec + 1 == +1) {
        this.counter.min += 0;
        this.counter.sec = 1
      }

      else this.counter.sec += 1

      if (this.counter.sec == 2) {
        // this.showSaludo();

      }

      if (this.counter.min === 0 && this.counter.sec == 0) clearInterval(intervalId)

    }, 1500)

  }





}



