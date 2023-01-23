import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(

    private router: Router

  ) { }




  goLocation(dir: any){

    this.router.navigate([dir]);

  }

}
