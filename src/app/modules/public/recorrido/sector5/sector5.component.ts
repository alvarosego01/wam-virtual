import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector5',
  templateUrl: './sector5.component.html',
  styleUrls: ['./sector5.component.sass']
})


export class Sector5Component implements OnInit, AfterViewInit  {


  show: boolean = false;

  isLoading: boolean;



  directions: any = {

    next: "/public/travel/6",
    prev: "/public/travel/4"

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
