import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent  {

  constructor(private router:Router, private generosService:GenerosService) { }
  
  guardarCambios(genero:generoCreacionDTO):void{
    this.generosService.crear(genero)
    .subscribe({
       next:(res)=>{console.log(res)},
       error:(ex)=>{console.log(ex)}
    });

    this.router.navigate(['/generos']);
  }
}
