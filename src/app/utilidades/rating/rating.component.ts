import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
@Input()
maximoRating=5;
@Input()
ratingSeleccionado=0;
@Output()
rated : EventEmitter<number>=new EventEmitter<number>();

maximoRatingArr= [0];
  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArr=Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index:number):void{
    //console.log('posicion:' +index);
    this.ratingSeleccionado=index+1;
  }  

  manejarMouseLeave(){
    //console.log('Mouse Leave');
    this.ratingSeleccionado=0;
  }

  rate(index:number):void{
    console.log('Voto enviado desde el hijo:' +index);
    this.rated.emit(index);
  }
}
