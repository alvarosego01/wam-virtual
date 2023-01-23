import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-principal-menu',
  templateUrl: './principal-menu.component.html',
  styleUrls: ['./principal-menu.component.sass']
})
export class PrincipalMenuComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren("items") items!: QueryList<ElementRef>;
  @ViewChildren("lines") lines!: QueryList<ElementRef>;
  @ViewChild("father") father!: ElementRef<HTMLElement>;

  private subscriptions: Subscription[] = [];

  miniCircle: string = "./assets/files/elements/digital-menu/chcircle.png";


  ready: boolean = true;

  constructor(
    public _globalServices: GlobalService,
    public activatedRoute: ActivatedRoute,
    public el: ElementRef,
    public router: Router
  ) {

this.subscriptions.push(this._globalServices.onResize.subscribe((r) => {

    this.initLinesNodes();


}));

   }

  ngOnInit(): void {

    // this.initLinesNodes();
    //

  }



  ngAfterViewInit(){

    this.initLinesNodes();

    this.ready = true;
  }



  ngOnDestroy() {

    this.subscriptions.forEach((subscription) => subscription.unsubscribe())

  }


initLinesNodes(){

  // if(this.showMenu == true){

    let padre = this.father.nativeElement;
  let its: ElementRef<HTMLElement>[] = this.items['_results'];
  let lns: ElementRef<HTMLElement>[] = this.lines['_results'];

  its.forEach((ele, idx) => {

    let el = ele.nativeElement;
    let ln: any = lns[idx].nativeElement;
    // let pa = padre.querySelector("img");

    // console.log('ln' , el.querySelector("img"));


    let spaceLine = ln.querySelector(".spaceLine");
    let spaceTo = ln.querySelector(".spaceTo");
    let spaceFrom = ln.querySelector(".spaceFrom");


    let l = {
      line: ln,
      spaceLine: spaceLine,
      spaceTo: spaceTo,
      spaceFrom: spaceFrom,
    }

    this._globalServices.adjustLine(padre, el, l);

  });

  // }
}


sleep(ms: number) {
return new Promise(
  resolve => setTimeout(resolve, ms)
);
}


goSector(page: string){

this.router.navigate([page]);

}




}
