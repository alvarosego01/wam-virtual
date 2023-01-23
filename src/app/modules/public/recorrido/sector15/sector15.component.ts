import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector15',
  templateUrl: './sector15.component.html',
  styleUrls: ['./sector15.component.sass']
})
export class Sector15Component implements OnInit, AfterViewInit  {


  show: boolean = false;

  isLoading: boolean;



  directions: any = {

    // next: "/public/travel/",
    next: null,
    prev: "/public/travel/14"

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
