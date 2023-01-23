import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-begin3',
  templateUrl: './begin3.component.html',
  styleUrls: ['./begin3.component.sass']
})
export class Begin3Component implements OnInit {

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