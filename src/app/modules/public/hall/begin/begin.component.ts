import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SoundsEffectsService, GlobalService } from "../../../../services";



declare var THREE: any;
// declare var AFRAME: any;

const AFRAME = (window as any).AFRAME;





@Component({
    selector: 'app-begin',
    templateUrl: './begin.component.html',
    styleUrls: ['./begin.component.sass']
})
export class BeginComponent implements OnInit, AfterViewInit {

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


    visibleVideoScren: boolean = false;
    visibleVideoZarzuela: boolean = false;
    visibleMundoCuervoComprar: boolean = false;



    dialogHelpText: boolean = false;

    visibleMenu3D: boolean = false;


    // scene: any = AFRAME.registerComponent('project', {

    //   init: function () {


    //     console.log('existe', this);

    //   }

    // });



    @ViewChild("menu3D") menu3D!: ElementRef<HTMLElement>;
    @ViewChild("screenMenu") screenMenu!: ElementRef<HTMLElement>;


    constructor(
        // public _globalService: GlobalService,
        private _elementRef: ElementRef,
        public activatedRoute: ActivatedRoute,
        private router: Router,
        private _soundsEffectService: SoundsEffectsService,
        public _globalServices: GlobalService

    ) {

        this.showHall = true;
        this.isLoading = true;


        this.initAframe();



    }

    ngAfterViewInit() {

        this.isLoading = false;
        console.log('todo cargado,', this.isLoading);

    }

    ngOnInit(): void {

        // this.initAframe();

        this.hallMusicBase1 = this._soundsEffectService._music_hall_base1;
        console.log('sonido', this.hallMusicBase1);
        this.hallMusicBase1.play();

        this.registerComponents();

    }

    async initAframe() {

        let x = new Promise(async (resolve, reject) => {

            let ndata: any = null;
            let nthis;

            let goClick: boolean = false;




            await AFRAME.registerComponent('menu_3d_interface', {

                init: function () {

                    // this.el.addEventListener('mouseleave', async function () {
                    //   let cur: any = document.getElementById("cursor-visual");
                    //   cur.emit("stopFuse");

                    //   goClick = false;

                    // });
                    // this.el.addEventListener('mouseenter', async function (evt) {
                    //   let cur: any = document.getElementById("cursor-visual");
                    //   cur.emit("startFuse");

                    //   goClick = true;
                    // });

                }

            });
            await AFRAME.registerComponent('goclick', {

                init: function () {

                    this.el.addEventListener('mouseleave', async function () {
                        let cur: any = document.getElementById("cursor-visual");
                        cur.emit("stopFuse");

                        goClick = false;

                    });
                    this.el.addEventListener('mouseenter', async function (evt: any) {
                        let cur: any = document.getElementById("cursor-visual");
                        cur.emit("startFuse");

                        goClick = true;
                    });

                }

            });

            await AFRAME.registerComponent('spot', {
                schema: {
                    linkto: { type: "string", default: "" },
                    type: { type: "string", default: '' }

                },
                init: function () {


                    let data = this.data;
                    let x = this;
                    this.el.addEventListener('click', function () {

                        if (goClick == false) {
                            return;
                        }

                        ndata = data;
                        nthis = x;

                        // return;

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

                    //   // console.log('evento enter', evt);

                    //   cur.emit("startFuse");
                    // });
                }
            });




            await AFRAME.registerComponent('object3d', {

                init: function () {
                    this.el.addEventListener("model-loaded", (e: any) => {
                        console.log(e);
                        let model = this.el.getObject3D("mesh");
                        model.traverse(function (node: any) {
                            if (!node.material) return;

                            var tmp = node.material
                            node.material = new THREE.MeshStandardMaterial({
                                skinning: true,
                                map: node.material.map
                            });
                            node.material.needsUpdate = true;
                            tmp.dispose()
                        });
                    });
                }

            });



            // await AFRAME.registerComponent('openvideo', {

            //   schema: {
            //     video: { type: "string", default: "" }

            //   },

            //   init: () => {


            //     document.querySelectorAll("[openvideo]").forEach(box =>
            //       box.addEventListener("click", (e) => {



            //         if (goClick == false) {
            //           return;
            //         }

            //         console.log('hubo click');

            //         // return;
            //         let att = box.getAttribute('openvideo')

            //         switch (att) {
            //           case "beckmann":
            //             this.visibleVideoScren = true;
            //             console.log('beckmann', this.visibleVideoScren);
            //             break;
            //           case "zarzuela":
            //             this.visibleVideoZarzuela = true;
            //             console.log('zarzuela', this.visibleVideoZarzuela);
            //             break;

            //           default:
            //             break;
            //         }


            //         goClick = false;
            //       })
            //     );


            //   }

            // });


            await AFRAME.registerComponent('video_view', {

                init: () => {
                    // this.el

                    var vid: any = document.querySelector('#videoBecknamm');
                    vid.muted = true;
                    vid.play();

                    var vid2: any = document.querySelector('#videoZarzuela');
                    vid2.muted = true;
                    vid2.play();


                    // var visores: any = document.querySelector('[video_view]');
                    // visores.addEventListener("click", async (e)=>{

                    //   // this.openVideoScreen();

                    //   this.visibleVideoScren = true;

                    //   console.log('evento clck', this.visibleVideoScren );

                    // })


                }

            });

            var coordSegura: any = {
                x: 0,
                z: 0
            }

            await AFRAME.registerComponent('camera_reader', {


                init: function () {

                    this.el.addEventListener('positionChanged', (e: any) => {

                        var x = e.detail.x;
                        var y = e.detail.y;
                        var z = e.detail.z;

                        var resolve = Math.pow(Math.abs(x), 2) + Math.pow(Math.abs(z), 2)


                        if (resolve >= Math.pow(27, 2)) {

                            // var valsumx = (x >= 0)? 0.25: -0.25;
                            // var valsumz = (z >= 0)? 0.25: -0.25;
                            var valsumx = coordSegura.x;
                            var valsumz = coordSegura.z;

                            this.el.setAttribute("position", `${valsumx} ${y} ${valsumz}`);

                            // console.log(`position ${x} ${z}`, resolve);
                            // console.log('left', Math.pow(Math.abs(x), 2) + Math.pow(Math.abs(z), 2) );
                        } else {
                            coordSegura.x = x
                            coordSegura.z = z
                        }


                    });

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


                            // return;
                            if (type != null && type == 'url') {

                                switch (ndata.linkto) {
                                    case "uberEats":

                                        // uberEats
                                        // window.location.href = this.uberEats;

                                        var win: any = window.open(this.uberEats, '_blank');  ///similar to above solution
                                        win.focus();

                                        // return;

                                        break;
                                    case "menuBack":
                                        window.location.href = "/public/principal?skip=1";
                                        return;

                                        break;
                                    case "gopromo":
                                        window.location.href = "/public/promo";
                                        return;

                                        break;
                                    case "gomundozarzuela":
                                        window.location.href = "/public/hall";
                                        return;

                                        break;

                                    default:
                                        break;
                                }

                            }

                            ele.emit("zoomout");

                            let fp: any = document.getElementById("camfadeplane");
                            fp.emit("camFadeOut");


                            goClick = false;

                        }


                    });

                    return;

                }
            });




        });

        await x.then(r => {





        }, e => {

        })

    }



    openVideoScreen(type: string) {


        if (type == 'beckmann') {

            this.visibleVideoScren = true;
        }
        if (type == 'zarzuela') {

            this.visibleVideoZarzuela = true;
        }
        if (type == 'cuervoComprar') {

            this.visibleMundoCuervoComprar = true;
        }


        console.log('open video', this.visibleVideoScren);

    }


    sleep(ms: number) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }



    closeVideoView(video: string) {


        switch (video) {
            case "beckmann":
                this.visibleVideoScren = false;
                break;
            case "zarzuela":
                this.visibleVideoZarzuela = false;
                break;

            default:
                break;
        }


    }


    openNgModal(type: string) {


        switch (type) {
            case "helpMenu":

                this.dialogHelpText = !this.dialogHelpText;

                break;
            case "menu3D":

                this.visibleMenu3D = !this.visibleMenu3D;

                let menu: any = this.menu3D.nativeElement;
                let screen: any = this.screenMenu.nativeElement;



                console.log('elemento', menu);

                if (this.visibleMenu3D == true) {

                    menu.emit('inmenu');
                    screen.emit('outscreen');

                    console.log('true');

                } else {

                    menu.emit('outmenu');
                    screen.emit('inscreen');

                    console.log('false');

                }


                break;

            default:
                break;
        }



    }


    testCliick() {


        console.log('prueba');

    }



    registerComponents() {

        // app-stand-screens


    }


}
