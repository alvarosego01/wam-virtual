import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector9',
  templateUrl: './sector9.component.html',
  styleUrls: ['./sector9.component.sass']
})
export class Sector9Component implements OnInit, AfterViewInit  {


  show: boolean = false;

  isLoading: boolean;


  directions: any = {

    next: "/public/travel/10",
    prev: "/public/travel/8"

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
