import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sector2',
  templateUrl: './sector2.component.html',
  styleUrls: ['./sector2.component.sass']
})
export class Sector2Component implements OnInit, AfterViewInit  {


  show: boolean = false;

  isLoading: boolean;

    directions: any = {

    next: "/public/travel/3",
    prev: "/public/travel/1"

  }


  orientacion = "";

  constructor(

    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {
    this.isLoading = true;


    this.activatedRoute.queryParams.subscribe( params => {

      let p: any = params;

      if( p != null && p.ot ){

        let o = p.ot
        this.setOrienta(o);

      }else{

        this.setOrienta('next');

      }

    });

  }

  ngAfterViewInit() {
    this.isLoading = false;

    console.log('todo cargado,', this.isLoading);

  }

  ngOnInit(): void {

    this.show= true;




  }

  setOrienta(type: string){


    if(type == 'back'){

      this.orientacion = "0 90 0";

    }

    if(type == 'next'){

      this.orientacion = "0 -130 0";

    }

    console.log('orientacion', this.orientacion);

  }


  goLocation(location: number){


    this.router.navigate([`/public/travel/${location}`]);

  }


}
