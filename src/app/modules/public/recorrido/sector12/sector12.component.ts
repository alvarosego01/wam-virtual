import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector12',
  templateUrl: './sector12.component.html',
  styleUrls: ['./sector12.component.sass']
})
export class Sector12Component implements OnInit, AfterViewInit  {


  show: boolean = false;

  isLoading: boolean;


  directions: any = {

    next: "/public/travel/13",
    prev: "/public/travel/11"

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
