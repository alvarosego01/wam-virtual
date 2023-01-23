import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animate-text',
  templateUrl: './animate-text.component.html',
  styleUrls: ['./animate-text.component.sass']
})
export class AnimateTextComponent implements OnInit {


  @Input("titulo") titulo: string = '';
  @Input("subTitulo") subTitulo: string = '';
  @Input("typeTitle") typeTitle: string = '';

  @Input("reveal") reveal: boolean = false;




  vr: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }



  animacionEnd($event: any) {

    let animationName = $event.animationName;
    let classList = $event.target.classList;

    // console.log(' animacion end', $event);


    if (animationName == 'dash' && classList.contains('titulo')) {



      this.vr = true;



    }


  }


}
