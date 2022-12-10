import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { peliculaCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  form:any;

  @Input()
  modelo:any;

  @Output()
  respuestaCine : EventEmitter<peliculaCreacionDTO>=new EventEmitter<peliculaCreacionDTO>();
  
  constructor(private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.form=this.formBuilder.group({
       titulo:['',{
          validators:[Validators.required,Validators.minLength(3)]         
       }      
      ],
      resumen:'',
      enCines:false,
      trailer:'',
      fechaLanzamiento:'',
      poster:'',
      generosIds:''      
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
    console.log("formulario-pelicula::guardarCambios");
    this.respuestaCine.emit(this.form.value);
    this.router.navigate(['/peliculas']);
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
