import { Component, OnInit, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalService, SoundsEffectsService } from "../../../../services";


declare var AFRAME: any;
declare namespace AFrame{
  interface Coordinate{}
}


@Component({
  selector: 'app-begin2',
  templateUrl: './begin2.component.html',
  styleUrls: ['./begin2.component.sass']
})
export class Begin2Component implements OnInit {

 showHall: boolean = false;

  isLoading: boolean;

  skipButton: boolean = false;

  counter!: { min: number, sec: number }

  directions: any = {

    next: "/public/travel/5",
    prev: "/public/travel/3"

  }




  videopromo: any;

  skipeado: boolean = false;


  uberEats: string = "https://www.ubereats.com/mx/mexico-city/food-delivery/kana-vinos-y-licores-condesa/dUcu4YcxQ6i253oyk8IKZA/c20b5cb5-62b3-4148-b24f-689f185f98ee/9fe49dea-5a24-4779-b2c0-474c4eac7b8b/cb9ad888-4b0a-4907-aaf8-3dfccff38607?ps=1";


  hallMusicBase1: any = null;

  constructor(
    public _globalService: GlobalService,
    private _elementRef : ElementRef,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private _soundsEffectService: SoundsEffectsService

    ) {

      this.showHall = true;
      this.isLoading = true;

      this.setSkipIntro();
  }

  ngAfterViewInit() {

    this.isLoading = false;
    console.log('todo cargado,', this.isLoading);
    this.videoWall();




  }

  ngOnInit(): void {


    this.initAframe();

  }


  async nextHall(){

    this.skipeado = true;
    this.showHall = true;
    this.router.navigate([], {
      queryParams: {
        skipromo: "1"
      }
    });


    await this.initAframe();

  }

  // async timer() {
  //   this.counter = { min: 0, sec: 0 } // choose whatever you want

  //   console.log('llama timer');

  //   let intervalId = setInterval(async () => {
  //     if (this.counter.sec + 1 == +1) {
  //       this.counter.min += 0;
  //       this.counter.sec = 1
  //     }
  //     else this.counter.sec += 1
  //     if (this.counter.min === 0 && this.counter.sec == 0) clearInterval(intervalId)


  //     if (this.counter.sec == 7) {
  //       // this.playFondo();

  //       this.skipButton = true;


  //     }


  //     // console.log('contador', this.counter.sec);


  //   }, 1000)
  // }



  videoWall(){


    if(this.showHall == true){

      return;
    }

    this.videopromo = this._globalService.DM.player( document.getElementById("videopromo") ,{
      video: "x7z9cwu",
      width: "100%",
      height: "100%",
      params: {
          autoplay: true,
          // mute: true,
          logo : false,
          controls: false
      },
      events: {
        pause: () => {


          console.log('pausa');
          this.videopromo.play();

        },
        video_start: () => {

          let intervalId = setTimeout(() => {

            this.skipButton = true;



          }, 12000);



        },
        video_end: () => {
          console.log('finaliza');

          this.nextHall();

        },
        timeupdate: (e: any) => {

          console.log('time update', e);

        },

        progress: (e: any) => {
          console.log(' progreso', e);
        }


      }

    });




  }


  async setSkipIntro(){




    this.activatedRoute.queryParams.subscribe( async (params: any) => {

      console.log('params', params);

      if((params != null && params.skipromo) && (params.skipromo == "1") ){


        this.nextHall();

    }

    });



  }

  async initAframe() {

    let x = new Promise(async (resolve, reject) => {

      let ndata: any = null;
      let nthis: any = null;

      await AFRAME.registerComponent('spot', {
        schema: {
          linkto: { type: "string", default: "" },
          type: { type: "string", default: '' }
          // spotgroup: { type: "string", default: "" },
          // infogroup: { type: "string", default: "" },
          // doorsgroup: { type: "string", default: "" },
          // infoparent: { type: "string", default: "" }
        },
        init: function () {

          // //add image source of hotspot icon
          // this.el.setAttribute("src", "#hotspot");
          //make the icon look at the camera all the time
          this.el.setAttribute("look-at", "#cam");

          let data = this.data;
            let x: any = this;
          this.el.addEventListener('click', function () {
            ndata = data;
            nthis = x;


            // console.log('click', this);

            let cam: any = document.getElementById("cam");
            cam.emit("zoomin");

            let fp: any = document.getElementById("camfadeplane");
            fp.emit("camFadeIn");
            //alert("Start zoom");




          });
          // this.el.addEventListener('mouseleave', function () {
          //   let cur: any = document.getElementById("cursor-visual");
          //   cur.emit("stopFuse");
          // });
          // this.el.addEventListener('mouseenter', function (evt) {
          //   let cur: any = document.getElementById("cursor-visual");
          //   cur.emit("startFuse");
          // });
        }
      });




      await AFRAME.registerComponent('camara', {
        init: () => {

          let ele: any = document.querySelector('#cam');

          ele.addEventListener("animationcomplete", (event: any) => {
            event.preventDefault();

            if (event.detail.name == 'animation__zoomin') {

              // let sky = document.getElementById("skybox");
              // sky.setAttribute("src", ndata.linkto);

              let type: any = ndata.type;

              console.log('ndata', ndata);
              // return;
              if (type != null && type == 'url') {


                switch (ndata.linkto) {
                  case "uberEats":

                  // uberEats
                    window.location.href = this.uberEats;
                    return;

                    break;
                  case "menuBack":

                  // uberEats
                    // this.router.navigate(['/public/principal']);
                     window.location.href = "/public/principal";
                    return;

                    break;

                  default:
                    break;
                  }
              }

              ele.emit("zoomout");

              let fp: any = document.getElementById("camfadeplane");
              fp.emit("camFadeOut");

            }


          });




          return;

        }
      });




      resolve(true);

    });

    await x.then(r => {


      this.hallMusicBase1 = this._soundsEffectService._music_hall_base1;

      this.hallMusicBase1.play();


    }, e => {

    })

  }





}
