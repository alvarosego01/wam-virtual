import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';




@Component({
  selector: 'app-video-intro',
  templateUrl: './video-intro.component.html',
  styleUrls: ['./video-intro.component.sass']
})
export class VideoIntroComponent implements OnInit {


  @Input('videoIntro') videoIntro: boolean = false;

  @Output() videoEnd = new EventEmitter<Boolean>();


  constructor() { }

  ngOnInit(): void {
  }



  introEnd(){

    console.log('termina video');

    this.videoEnd.emit(true);

  }


}
