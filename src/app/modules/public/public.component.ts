import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.sass']
})
export class PublicComponent implements OnInit {


  images = [
    "./assets/files/elements/digital-menu/conect.png",
    "./assets/files/elements/digital-menu/facircle2.png",
    "./assets/files/elements/iconsLogos/isotipoPlatinum.png",
    "./assets/files/elements/digital-menu/chcircle.png"
  ];
loaded = 0;

  constructor() { }

  ngOnInit(): void {

    this.loadedFunction();

  }


  loadedFunction(){
    this.loaded++;
    if(this.images.length == this.loaded){
      //all images loaded
    }
  }


}
