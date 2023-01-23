import { Component, Input, OnInit, Output , EventEmitter, OnDestroy} from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-visor-video',
  templateUrl: './visor-video.component.html',
  styleUrls: ['./visor-video.component.sass']
})
export class VisorVideoComponent implements OnInit, OnDestroy {

  @Input("video") video: string = '';
  @Input("type") type: string = '';
  // @Input("open") open: any = null;

  @Output() close = new EventEmitter<boolean>();


  videoDaily: any = null;

  constructor(
    public _globalServices: GlobalService
  ) { }

  ngOnInit(): void {


    console.log('existe componente');

    if( this.type == 'daily' && this.video != null ){


      console.log('el video', this.videoDaily);

      this.setDailyMotion(this.video);

    }

  }

  ngOnDestroy(){

    this.closeDialog();

  }


  closeDialog() {

    this.video = '';
    this.type = '';

    console.log('destruido');

    // this.videoDaily

    if(this.videoDaily != null){

      this.videoDaily.destroy('myVideo');
    }


    this.close.emit(false);

  }

  videoEnd(){


  }

  async setDailyMotion(video: string){

    console.log('se setea video', video);

    await this._globalServices.sleep(1000);

    this.videoDaily = this._globalServices.DM.player( document.getElementById("myVideo") ,{
      video: video,
      width: "100%",
      height: "100%",
      params: {
          autoplay: true,
          // mute: true,
          logo : false,
          controls: true,
      },
      events: {
        // pause: () => {


        //   console.log('pausa');
        //   this.videoDaily.play();

        // },
      video_start: () => {

        console.log('inicia video');

      },
      playing: (e: any) =>{

        console.log('playing', e);


      },
      video_end: () => {
        console.log('finaliza');

        this.closeDialog();


        }
     }

  });

  // console.log('document.getElementById("myVideo")', document.getElementById("myVideo"));



  }


}
