import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import{actorCreacionDTO}from '../actor'

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  form:any;

  @Input()
  modelo:any;

  @Output()
  respuestaGenero : EventEmitter<actorCreacionDTO>=new EventEmitter<actorCreacionDTO>();

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.form=this.formBuilder.group({
      nombre:['',{
         validators:[Validators.required]         
      }     
     ] ,
     fechaNacimiento:''

   }
   )

  }

  guardarCambios():void{
    console.log("formulario-actores::guardarCambios");
    this.respuestaGenero.emit(this.form.value);
  }

}
