import { Injectable } from '@angular/core';

// import * as THREE from 'three';

declare var THREE: any;

declare var AFRAME: any;
// declare namespace AFrame{
//   interface Coordinate{}
// }

@Injectable({
  providedIn: 'root'
})
export class AframeService {

  constructor() { }

  visibletElements(elements: string[] = [], type: any) {

    let ele: any = null;

    if (elements != null && elements.length > 0) {

      elements.forEach((elems, idx) => {

        ele = document.getElementsByClassName(elems);

        if (ele != null) {

          if (ele.length > 0) {

            for (let i of ele) {
              // console.log(i); // logs 3, 5, 7
              i.setAttribute('visible', type);
              if (type == true) {
                i.setAttribute('scale', "1 1 1");
              } else {

                i.setAttribute('scale', "0 0 0");
              }
            }

          } else {

            ele.setAttribute('visible', type);

            if (type == true) {
              ele.setAttribute('scale', "1 1 1");
            } else {

              ele.setAttribute('scale', "0 0 0");
            }

          }
        }

      });

    }




    return;

  }



  setDoorsHovering() {

    return new Promise((resolve, reject) => {


      AFRAME.registerComponent('doorHover', {
        init: function () {
          this.model = null;
          this.mixer = null;

          var model = this.el.getObject3D('mesh');
          if (model) {
            this.load(model);
          } else {
            let x: any = this;
            this.el.addEventListener('model-loaded', function (e: any) {
              x.load(e.detail.model);
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

      resolve(true);

    });

  }



}
