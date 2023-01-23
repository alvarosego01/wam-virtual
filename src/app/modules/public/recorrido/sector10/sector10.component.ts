import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector10',
  templateUrl: './sector10.component.html',
  styleUrls: ['./sector10.component.sass']
})
export class Sector10Component implements OnInit, AfterViewInit  {


  show: boolean = false;

  isLoading: boolean;




  directions: any = {

    next: "/public/travel/11",
    prev: "/public/travel/9"

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
