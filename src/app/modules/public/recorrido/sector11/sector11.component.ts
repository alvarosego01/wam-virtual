import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector11',
  templateUrl: './sector11.component.html',
  styleUrls: ['./sector11.component.sass']
})
export class Sector11Component implements OnInit, AfterViewInit  {


  show: boolean = false;

  isLoading: boolean;


  directions: any = {

    next: "/public/travel/12",
    prev: "/public/travel/10"

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
