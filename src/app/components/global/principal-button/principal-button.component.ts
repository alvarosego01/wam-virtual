import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-principal-button',
  templateUrl: './principal-button.component.html',
  styleUrls: ['./principal-button.component.sass']
})
export class PrincipalButtonComponent implements OnInit {


  @Output() accion  =  new EventEmitter<boolean>();

  @Input("texto") texto: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  accionBoton(){


    this.accion.emit(true);


  }

}
