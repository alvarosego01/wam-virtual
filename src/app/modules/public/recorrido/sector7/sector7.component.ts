import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector7',
  templateUrl: './sector7.component.html',
  styleUrls: ['./sector7.component.sass']
})
export class Sector7Component implements OnInit, AfterViewInit  {


  show: boolean = false;

  isLoading: boolean;



  directions: any = {

    next: "/public/travel/8",
    prev: "/public/travel/6"

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
