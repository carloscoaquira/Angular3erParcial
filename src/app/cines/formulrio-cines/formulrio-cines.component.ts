import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-formulrio-cines',
  templateUrl: './formulrio-cines.component.html',
  styleUrls: ['./formulrio-cines.component.css']
})
export class FormulrioCinesComponent implements OnInit {
  form:any;

  @Input()
  modelo:any;

  @Output()
  respuestaCine : EventEmitter<cineCreacionDTO>=new EventEmitter<cineCreacionDTO>();
  
  constructor(private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.form=this.formBuilder.group({
       nombre:['',{
          validators:[Validators.required,Validators.minLength(3)]         
       }      
      ],
      latitud:'',
      longitud:'' 
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
    console.log("Cine guardado en formulario-genero!!!");
    this.respuestaCine.emit(this.form.value);
    this.router.navigate(['/cine']);
  }

}
