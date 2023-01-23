import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TourService } from '../../../services';



@Component({
  selector: 'app-directional',
  templateUrl: './directional.component.html',
  styleUrls: ['./directional.component.sass'],



})
export class DirectionalComponent implements OnInit {


  @Input("dir") dir: any;


  // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"

  constructor(
    private _tourService: TourService
  ) { }


  @HostListener('document:keydown', ['$event'])

  handleKeyboardEvent(event: any) {

    let key = event.key;
    // console.log('key', key)

    if( key == 'W' || key == 'w' || key == 'ArrowUp' ){

      this._tourService.goLocation( this.dir.next || null );

    }
    if( key == 'S' || key == 's' || key == 'ArrowDown' ){

      this._tourService.goLocation( this.dir.prev || null );

    }



  }


  ngOnInit(): void {
  }



}
