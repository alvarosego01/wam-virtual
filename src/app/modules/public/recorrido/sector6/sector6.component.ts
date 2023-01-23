import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector6',
  templateUrl: './sector6.component.html',
  styleUrls: ['./sector6.component.sass']
})
export class Sector6Component implements OnInit, AfterViewInit {


  show: boolean = false;

  isLoading: boolean;



  directions: any = {

    next: "/public/travel/7",
    prev: "/public/travel/5"

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
