import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector8',
  templateUrl: './sector8.component.html',
  styleUrls: ['./sector8.component.sass']
})
export class Sector8Component implements OnInit, AfterViewInit  {


  show: boolean = false;

  isLoading: boolean;



  directions: any = {

    next: "/public/travel/9",
    prev: "/public/travel/7"

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
