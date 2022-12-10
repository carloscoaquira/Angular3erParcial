import { Component, Input, OnInit } from '@angular/core';
import { generoDTO } from '../generos';

@Component({
  selector: 'app-selector-generos',
  templateUrl: './selector-generos.component.html',
  styleUrls: ['./selector-generos.component.css']
})
export class SelectorGenerosComponent implements OnInit {

  constructor() { }
 
  @Input()
  Seleccionados:generoDTO[];

  @Input()
  NoSeleccionados:generoDTO[];


  ngOnInit(): void {
  }

  seleccionar(item:generoDTO,index:number){
    this.Seleccionados.push(item);
    this.NoSeleccionados.splice(index,1);
  } 

  deseleccionar(item:generoDTO,index:number){
      this.NoSeleccionados.push(item);
      this.Seleccionados.splice(index,1);
  }

  seleccionarTodo(){
    this.Seleccionados.push(...this.NoSeleccionados);
  }

  deseleccionarTodo(){
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados=[];
  }

 }
