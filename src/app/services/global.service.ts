import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

declare var DM: any;

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  spinner: boolean = false;


  openModal: boolean = false;

  counter!: { min: number, sec: number }

  public onResize = new Subject();

  DM = DM;


  constructor() {

    window.addEventListener('resize', (e) => {
    //   this.onResize.next();
      this.onResize.next(true);
    });


  }



  startTimer() {
    this.counter = { min: 30, sec: 0 } // choose whatever you want
    let intervalId = setInterval(() => {
      if (this.counter.sec - 1 == -1) {
        this.counter.min -= 1;
        this.counter.sec = 59
      }
      else this.counter.sec -= 1
      if (this.counter.min === 0 && this.counter.sec == 0) clearInterval(intervalId)
    }, 1000)
  }





  adjustLine(from: any, to: any, lineComponent: any){



  var line = lineComponent.line;
  var spaceLine = lineComponent.spaceLine;
  var spaceTo = lineComponent.spaceTo;
  var spaceFrom = lineComponent.spaceFrom;

  // var spaceTo = document.getElementById('spaceTo');
  // var spaceFrom = document.getElementById('spaceFrom');
  // var spaceLine =  document.getElementById('spaceLine');

   var hfrom =  from.offsetHeight/2;
   var hto =  to.offsetHeight/2;

     var fT = from.offsetTop  + from.offsetHeight/2;
          var tT = to.offsetTop 	 + to.offsetHeight/2;
          var fL = from.offsetLeft + from.offsetWidth/2;
          var tL = to.offsetLeft 	 + to.offsetWidth/2;



      var CA   = Math.abs(tT - fT );
      var CO   = Math.abs(tL - fL);
      var H    = Math.sqrt(CA*CA + CO*CO);
      var ANG  = 180 / Math.PI * Math.acos( CA/H );


      // var hFrom =

      if(tT > fT){
          var top  = (tT-fT)/2 + fT;
      }else{
          var top  = (fT-tT)/2 + tT;
      }
      if(tL > fL){
          var left = (tL-fL)/2 + fL;
      }else{
          var left = (fL-tL)/2 + tL;
      }

      if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
        ANG *= -1;
      }
      top-= H/2;


      line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
      line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
      line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
      line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
      line.style["-transform"] = 'rotate('+ ANG +'deg)';
      line.style.top    = top+'px';
      line.style.left   = left+'px';

      H = H - hfrom - hto;
      spaceLine.style.height = H + 'px';
      spaceFrom.style.height = hfrom + 'px';
      spaceTo.style.height = hto + 'px';
      //
      line.style.visibility = 'visible';



  }
  // adjustLine(
  //   document.getElementById('div1'),
  //   document.getElementById('div2'),
  //   document.getElementById('line')
  // );



  sleep(ms: any) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }





}
