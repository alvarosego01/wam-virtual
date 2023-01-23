import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector4',
  templateUrl: './sector4.component.html',
  styleUrls: ['./sector4.component.sass']
})
export class Sector4Component implements OnInit, AfterViewInit  {


  show: boolean = false;

  isLoading: boolean;



    directions: any = {

    next: "/public/travel/5",
    prev: "/public/travel/3"

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
