import { Component, OnInit } from '@angular/core';
import { AframeService } from 'src/app/services/aframe.service';
import { TourService } from 'src/app/services/tour.service';

// import * as THREE from 'three';
declare var THREE: any;

declare var AFRAME: any;

@Component({
  selector: 'app-gallery1',
  templateUrl: './gallery1.component.html',
  styleUrls: ['./gallery1.component.sass']
})
export class Gallery1Component implements OnInit {

  aframe: any = (window as any).AFRAME;




  show: boolean = false;

  isLoading: boolean;



  ccam: any = document.getElementById("cam");


  openInfoArt: boolean = false;




  test: boolean = false;

  infoShow: any = null;


  escenarios: string[] = [
    "scenario1",
    "scenario2",
    "scenario3",
    "scenario4"
  ]

  room!: number;

  art1: any[] = [

    {
      img: "./assets/files/images//museum/gallery/3.jpg",
      title: 'Titulo foto',

      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos esse? Illum fuga magnam mollitia, ex placeat rem consectetur vel velit, aut corrupti aliquam iste suscipit ducimus ratione aperiam doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, corporis dignissimos doloremque, quaerat ullam hic adipisci inventore exercitationem obcaecati deserunt saepe sapiente fugiat, laborum cupiditate assumenda vel delectus dolorum officia?"
    },

    {
      img: "./assets/files/images//museum/gallery/2.jpg",
      title: 'Titulo foto',

      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos esse? Illum fuga magnam mollitia, ex placeat rem consectetur vel velit, aut corrupti aliquam iste suscipit ducimus ratione aperiam doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, corporis dignissimos doloremque, quaerat ullam hic adipisci inventore exercitationem obcaecati deserunt saepe sapiente fugiat, laborum cupiditate assumenda vel delectus dolorum officia?"
    },
    {
      img: "./assets/files/images//museum/gallery/1.jpg",
      title: 'Titulo foto',

      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos esse? Illum fuga magnam mollitia, ex placeat rem consectetur vel velit, aut corrupti aliquam iste suscipit ducimus ratione aperiam doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, corporis dignissimos doloremque, quaerat ullam hic adipisci inventore exercitationem obcaecati deserunt saepe sapiente fugiat, laborum cupiditate assumenda vel delectus dolorum officia?"
    },

    {
      img: "./assets/files/images//museum/gallery/1.jpg",
      title: 'Titulo foto',

      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos esse? Illum fuga magnam mollitia, ex placeat rem consectetur vel velit, aut corrupti aliquam iste suscipit ducimus ratione aperiam doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, corporis dignissimos doloremque, quaerat ullam hic adipisci inventore exercitationem obcaecati deserunt saepe sapiente fugiat, laborum cupiditate assumenda vel delectus dolorum officia?"
    },

  ]



  changeScenario: boolean = false;


  constructor(
    public _tourService: TourService,
    public _aframeService: AframeService
  ) {
    this.isLoading = true;
  }

  ngAfterViewInit() {
    this.isLoading = false;

    // console.log('todo cargado,', this.isLoading);

  }

  ngOnInit(): void {

    this.show = true;

    // this._aframeService.setDoorsHovering().then(r => {})
    this.initAframe();
    this.setRoom("1");
    // document.querySelector('a-assets').addEventListener('loaded', () => console.log('a-assets loaded'));

  }


  goLocation(location: string) {

    // console.log('una prueba');
    let l: string = `/public/museum/${location}`;
    this._tourService.goLocation(l);

  }


  async disableRooms() {


    this._aframeService.visibletElements(this.escenarios, false);

  }

  async initAframe() {

    let x = new Promise(async (resolve, reject) => {


      AFRAME.registerComponent('door-hover', {
        init: function () {
          this.model = null;
          this.mixer = null;

          var model = this.el.getObject3D('mesh');
          if (model) {
            this.load(model);
          } else {
            this.el.addEventListener('model-loaded', function (this: any, e: any) {
              this.load(e.detail.model);
            }.bind(this));
          }
        },

        load: function (model: any) {
          this.model = model;
          this.mixer = new THREE.AnimationMixer(model);
          this.model.animations.forEach((animation: any) => {

            console.log('animation', animation);

            this.mixer.clipAction(animation, model).play();
          });
        },

        tick: function (t: any, dt: any) {
          if (this.mixer && !isNaN(dt)) {
            this.mixer.update(dt / 1000);
          }
        }
      });

      AFRAME.registerComponent('modify-materials', {
        init: function () {
          // Wait for model to load.
          this.el.addEventListener('model-loaded', () => {
            // Grab the mesh / scene.
            const obj = this.el.getObject3D('mesh');
            // Go over the submeshes and modify materials we want.
            // obj.traverse(node => {
              // if (node.name.indexOf('ship') !== -1) {
                // node.material.color.set('red');
              // }
            // });
          });
        }
      });



      let ndata: any;
      let nthis;

      await AFRAME.registerComponent('spot', {
        schema: {
          linkto: { type: "string", default: "" },
          room: { type: "string", default: '' }
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

          this.el.addEventListener('click', function (this: any) {
            ndata = data;
            nthis = this;


            console.log('click', this);

            let cam: any = document.getElementById("cam");
            cam.emit("zoomin");

            let fp: any = document.getElementById("camfadeplane");
            fp.emit("camFadeIn");
            //alert("Start zoom");




          });
          this.el.addEventListener('mouseleave', function () {
            let cur: any = document.getElementById("cursor-visual");
            cur.emit("stopFuse");
          });
          this.el.addEventListener('mouseenter', function (evt: any) {
            let cur: any = document.getElementById("cursor-visual");
            cur.emit("startFuse");
          });
        }
      });



      await this.aframe.registerComponent('camara', {
        init: () => {

          let ele: any = document.querySelector('#cam');

          ele.addEventListener("animationcomplete", (event: any) => {
            event.preventDefault();

            if (event.detail.name == 'animation__zoomin') {

              let sky: HTMLElement = document.getElementById("skybox")!;
              sky.setAttribute("src", ndata.linkto);

              let nroom: any = ndata.room;

              if (nroom != null) {

                console.log('go to', nroom);

                this.setRoom(nroom);
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

    }, e => {

    })

  }



  closeModal() {

    this.openInfoArt = false;

  }


  showInfoArt(room: number, art: number) {

    if (room && art) {

      if (room == 1) {

        this.infoShow = this.art1[art];

      }

      if (room == 2) {

        this.infoShow = this.art1[art];

      }

      if (room == 3) {

        this.infoShow = this.art1[art];

      }

      if (room == 4) {

        this.infoShow = this.art1[art];

      }

      this.openInfoArt = true;

    }

  }



  async setRoom(newRoom: string = '') {

    if (newRoom != '') {

      await this.disableRooms().then(r => { });
      // await this.disableRooms().then(r => {});

      switch (newRoom) {
        case "1":

          this._aframeService.visibletElements(["scenario1"], true);

          this.room = 1;

          break;
        case "2":

          this._aframeService.visibletElements(["scenario2"], true);

          this.room = 2;


          break;
        case "3":

          this._aframeService.visibletElements(["scenario3"], true);

          this.room = 3;


          break;
        case "4":

          this._aframeService.visibletElements(["scenario4"], true);

          this.room = 4;


          break;

        default:
          break;
      }



    }

  }




}


