import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

// import * as THREE from 'three';
declare var THREE: any;
declare var CANNON: any;

declare var AFRAME: any;


@Component({
  selector: 'app-aframe-tests',
  templateUrl: './aframe-tests.component.html',
  styleUrls: ['./aframe-tests.component.sass']
})
export class AframeTestsComponent implements OnInit {


  open:boolean = true;


  @ViewChild("menu3D") menu3D!: ElementRef<HTMLElement>;

  constructor(
    public _globalServices: GlobalService
  ) {


  }

  ngOnInit(): void {

    this.iniciar().then(rr => {});



  }


  iniciar(){


    return new Promise(async (resolve,reject) => {


      await AFRAME.registerComponent('goclick', {

        init: function () {

          this.el.addEventListener('mouseleave', async function () {
            let cur: any = document.getElementById("cursor-visual");
            cur.emit("stopFuse");

            // goClick = false;

          });
          this.el.addEventListener('mouseenter', async function (evt: any) {
            let cur: any = document.getElementById("cursor-visual");
            cur.emit("startFuse");

            // goClick = true;
          });

        }

      });


      await AFRAME.registerComponent('boxtest', {
        init: function() {


          // document.querySelector('#elementoPrueba').emit('animation__fadeOut');
          // document.querySelector('#elementoPrueba').emit('animation__upOut');
          // document.querySelector('#elementoPrueba').emit('animation__up');


          // document.querySelector('#elementoPrueba').emit('animation__fade');
          // document.querySelector('#elementoPrueba').emit('animation__fadeOut');
          // document.querySelector('#elementoPrueba').emit('animation__up');
          // document.querySelector('#elementoPrueba').emit('salida');

          // this.el.emit('animation__fade');
          // this.el.emit('animation__fadeOut');
          // this.el.emit('animation__up');

          console.log('se setea', this);
        }

      });


    resolve(true);

    });

  }


  clicktest(){

    this.open = !this.open;

    console.log('click', this.open);
    // let x: any = document.querySelector('#elementoPrueba');

    let x: any = this.menu3D.nativeElement;

    if(this.open){


      // x.emit('in_menu1');
      x.emit('inmenu');
      // x.emit('inmenu2');
      // x.emit('in_menu3');
      console.log('true');

    }else{


      // x.emit('out_menu1');
      x.emit('outmenu');
      // x.emit('outmenu2');
      // x.emit('out_menu3');
      console.log('false');

    }


  }



}



// yarn add aframe-gif-shader  aframe-super-keyboard aframe-super-hands-component --save