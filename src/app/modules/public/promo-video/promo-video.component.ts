import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "../../../services";


@Component({
  selector: 'app-promo-video',
  templateUrl: './promo-video.component.html',
  styleUrls: ['./promo-video.component.sass']
})
export class PromoVideoComponent implements OnInit, OnDestroy {


  videopromo: any = null;

  skipButton: boolean = false;

  constructor(
    public _globalService: GlobalService,

    private router: Router,
    // private _soundsEffectService: SoundsEffectsService
  ) { }

  ngOnInit(): void {

    this.videoWall();

  }




  introEnd(){

  }



  goBack(){


    this.router.navigate(['/public/principal'], { queryParams: { skip: '1' } });


  }



  ngOnDestroy() {

    this.videopromo.destroy('videopromo');

    this.videopromo = null;

  }





  videoWall(){


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

          }, 6000);

        },
        video_end: () => {
          console.log('finaliza');

          this.goSector("/public/travel");

        }
     }

  });



  }



  goSector(page: string){





this.router.navigate([page]);

}



}
