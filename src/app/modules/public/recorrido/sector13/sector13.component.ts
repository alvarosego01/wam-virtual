import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector13',
  templateUrl: './sector13.component.html',
  styleUrls: ['./sector13.component.sass']
})
export class Sector13Component implements OnInit, AfterViewInit  {


  show: boolean = false;

  isLoading: boolean;



  directions: any = {

    next: "/public/travel/14",
    prev: "/public/travel/12"

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
