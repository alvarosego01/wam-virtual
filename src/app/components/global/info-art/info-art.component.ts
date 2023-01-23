import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-info-art',
  templateUrl: './info-art.component.html',
  styleUrls: ['./info-art.component.sass']
})
export class InfoArtComponent implements OnInit {



//   info = {

//     img
// title
// desc

//   }

  @Input("info") info: any = null;
  @Output() close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {



  }


  closeDialog() {


    this.close.emit(false);
  }


}
