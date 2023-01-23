import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector14',
  templateUrl: './sector14.component.html',
  styleUrls: ['./sector14.component.sass']
})
export class Sector14Component implements OnInit, AfterViewInit  {


  show: boolean = false;

  isLoading: boolean;



  directions: any = {

    next: "/public/travel/15",
    prev: "/public/travel/13"

  }

  constructor() {
    this.isLoading = true;
  }

  ngAfterViewInit() {
    this.isLoading = false;

    console.log('todo cargado,', this.isLoading);

  }

  ngOnInit(): void {

    this.show= true;

  }

}
