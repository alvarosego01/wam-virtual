

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TourService } from '../../../../services';



declare var THREE: any;


declare var AFRAME: any;

// import fade in animation

@Component({

  selector: 'app-sector1',
  templateUrl: './sector1.component.html',
  styleUrls: ['./sector1.component.sass'],

})


export class Sector1Component implements OnInit, AfterViewInit  {



  uberEats: string = "https://www.ubereats.com/mx/mexico-city/food-delivery/kana-vinos-y-licores-condesa/dUcu4YcxQ6i253oyk8IKZA/c20b5cb5-62b3-4148-b24f-689f185f98ee/9fe49dea-5a24-4779-b2c0-474c4eac7b8b/cb9ad888-4b0a-4907-aaf8-3dfccff38607?ps=1";






  show: boolean = false;

  isLoading: boolean;

  directions: any = {

    next: "/public/travel/2",
    prev: null

  }


  constructor(
    public _tourService: TourService
  ) {

    this.isLoading = true;

  }

  ngAfterViewInit() {

    this.isLoading = false;
    console.log('todo cargado,', this.isLoading);

  }

  ngOnInit(): void {

    this.show= true;


    this.initAframe();


  }

  goLocation(loc: any){

    let l: string = `/public/travel/${loc}`
    this._tourService.goLocation(l);
    return;

  }



  async initAframe() {

    let x = new Promise(async (resolve, reject) => {

      let ndata: any;
      let nthis;

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
          // this.el.setAttribute("look-at", "#cam");

          let data = this.data;

          this.el.addEventListener('click', function (this: any) {

            ndata = data;
            nthis = this;

            // return;
            console.log('click', this);

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

          console.log('se setea esto');

          ele.addEventListener("animationcomplete", (event: any) => {
            event.preventDefault();

            console.log('click cam');

            if (event.detail.name == 'animation__zoomin') {

              // let sky = document.getElementById("skybox");
              // sky.setAttribute("src", ndata.linkto);

              let type: any = ndata.type;

              console.log('ndata', ndata);
              // return;
              if (type != null && type == 'url') {

                switch (ndata.linkto) {

                  case "menuBack":

                  // uberEats
                    // this.router.navigate(['/public/principal']);
                    window.location.href = "/public/principal?skip=1";
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


      // this.hallMusicBase1 = this._soundsEffectService._music_hall_base1;

      // this.hallMusicBase1.play();


    }, e => {

    })


  }

}
