import { Injectable } from '@angular/core';

import { Howl, Howler } from 'howler';


@Injectable({
  providedIn: 'root'
})
export class SoundsEffectsService {


  // efectos
  soundStart: any = new Howl({
    src: ['./assets/files/audio/efectos/soundStart.mp3']
  });

  enterText: any = new Howl({
    src: ['./assets/files/audio/efectos/soundEnterText.mp3'],
    volume: 0.20,
  });


  // voiceWelcome: any = new Howl({
  //   src: ['./assets/files/audio/voiceWelcome.mp4']
  // });
  voiceWelcome1: any = new Howl({
    src: ['./assets/files/audio/welcome1.m4a'],
    volume: 1,
  });
  voiceWelcome2: any = new Howl({
    src: ['./assets/files/audio/welcome2.m4a'],
    volume: 1,
  });
  voiceWelcome3: any = new Howl({
    src: ['./assets/files/audio/welcome3.m4a'],
    volume: 1,
  });


  // musica

  _music_hall_base1: any = new Howl({
    src: ['./assets/files/audio/music/hallBase.m4a'],
    volume: 0.15,
  });


  constructor() { }
}
