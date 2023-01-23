import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector3',
  templateUrl: './sector3.component.html',
  styleUrls: ['./sector3.component.sass']
})
export class Sector3Component implements OnInit, AfterViewInit  {


  show: boolean = false;

  isLoading: boolean;


    directions: any = {

    next: "/public/travel/4",
    prev: "/public/travel/2"

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
