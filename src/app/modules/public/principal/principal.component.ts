import { Component,  ElementRef, OnInit, ViewChild, ViewChildren, QueryList, OnDestroy, AfterViewInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';


import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass']
})
export class PrincipalComponent implements OnInit, OnDestroy, AfterViewInit {



  counter!: { min: number, sec: number }

  video: any = null;

  showMenu: boolean = false;

  skipeable: boolean = true;



  // @ViewChildren("items") items: QueryList<ElementRef>;
  // @ViewChildren("lines") lines: QueryList<ElementRef>;
  // @ViewChild("father") father: ElementRef<HTMLElement>;



  // private subscriptions: Subscription[] = [];


  // miniCircle: string = "./assets/files/elements/digital-menu/chcircle.png";


  // private timer;

  reproducVideo: boolean = false;

  constructor(
    public _globalServices: GlobalService,
    public activatedRoute: ActivatedRoute,
    public el: ElementRef,
    public router: Router
  ) {
    // this.startTimer();


    // this.subscriptions.push(this._globalServices.onResize.subscribe(() => {

    //   if(this.showMenu == true){

    //     this.initLinesNodes();

    //   }

    // }));

  }


  ngAfterViewInit(){

    // this.initLinesNodes();

  }

  ngOnInit(): void {

    this.videoWall();

    this.setSkipIntro();

  }


  ngOnDestroy() {
    // this.subscriptions.forEach((subscription) => subscription.unsubscribe())
    this.showMenu = false;

    this.video.destroy('myVideo');

    this.video = null;

  }


  videoWall(){

    console.log('existe video' , document.getElementById("myVideo"));

    this.video = this._globalServices.DM.player( document.getElementById("myVideo") ,{
      video: "x7z9cwv",
      width: "100%",
      height: "100%",
      params: {
          autoplay: true,
          // mute: true,
          logo : false,
          controls: false,
          // "ui-highlight": "000",

      },
      events: {
        pause: () => {


          console.log('pausa');
          this.video.play();

        },
        video_start: () => {

          console.log('inicia video');


          this.reproducVideo = true;

      if(this.showMenu == false){

        let intervalId = setTimeout( async () => {


          this.showMenu = true;
          this.skipeable = false;

          await this._globalServices.sleep(250);
          // this.initLinesNodes();

        }, 14500);


      }
      },
      playing: (e: any) =>{

        console.log('playing', e);


      },
      video_end: () => {
        console.log('finaliza');

        this.video.play();

        }
     }

  });

  this.video.addEventListener('apiready', () => {
    console.log('Player API ready');

    this.video.play();

  });



  }


 async setSkipIntro(){

  this.activatedRoute.queryParams.subscribe( async (params: any) => {


    if((params != null && params.skip) && (params.skip == "1") ){


      this.video.currentTime = 12;
      await this.sleep(500);

      this.skipeable = false;
      this.showMenu = true;
      await this.sleep(250);

      // this.initLinesNodes();

  }

  });


}

// initLinesNodes(){

//   if(this.showMenu == true){


//     let padre = this.father.nativeElement ;
//   let its: ElementRef<HTMLElement>[] = this.items['_results'];
//   let lns: ElementRef<HTMLElement>[] = this.lines['_results'];


//   // console.log('prueba', this.items);


//   its.forEach((ele, idx) => {

//     let el = ele.nativeElement;
//     let ln: any = lns[idx].nativeElement;
//     // let pa = padre.querySelector("img");

//     // console.log('ln' , el.querySelector("img"));


//     let spaceLine = ln.querySelector(".spaceLine");
//     let spaceTo = ln.querySelector(".spaceTo");
//     let spaceFrom = ln.querySelector(".spaceFrom");


//     let l = {
//       line: ln,
//       spaceLine: spaceLine,
//       spaceTo: spaceTo,
//       spaceFrom: spaceFrom,
//     }

//     this._globalServices.adjustLine(padre, el, l);

//   });

//   }
// }



// goSector(page: string){


//   this.router.navigate([page]);

// }


sleep(ms: number) {
return new Promise(
  resolve => setTimeout(resolve, ms)
);
}


}
