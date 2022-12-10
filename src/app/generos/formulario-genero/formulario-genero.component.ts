import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/primeraLetraMayuscula';
import{generoCreacionDTO} from '../genero'

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  form:any;

  @Input()
  modelo:any;

  @Output()
  respuestaGenero : EventEmitter<generoCreacionDTO>=new EventEmitter<generoCreacionDTO>();
  
  constructor(private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.form=this.formBuilder.group({
       nombre:['',{
          validators:[Validators.required,Validators.minLength(3),primeraLetraMayuscula]         
       }
      
      ]      
    }
    )

    if(this.modelo!==undefined){
      console.log(this.modelo);
      this.form.patchValue(this.modelo);
    }
    else
    {
      console.log('undefined!!!');
    }

  }

  guardarCambios():void{
    console.log("Genero guardado en formulario-genero!!!");
    this.respuestaGenero.emit(this.form.value);
    this.router.navigate(['/generos']);
  }

  obtenerErrorCampoNombre(){
    var campo=this.form.get('nombre');
    if(campo.hasError('required')){
      return 'El campo nombre es requerido';
    }

    if(campo.hasError('minlength')){
        return 'La longitud minima es de 3 caracteres';
      }

    if(campo.hasError('primeraLetraMayuscula')){
       return campo.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }


}
