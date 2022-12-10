import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';
import { generoDTO } from '../generos';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router:Router,
    private generosService:GenerosService,
    private activatedRoute:ActivatedRoute    
    ) { }

  modelo:generoDTO;

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params)=>{
         this.generosService.obtenerPorId(params['id'])
         .subscribe({
            next:(res)=>{this.modelo=res},
            error:(ex)=>{this.router.navigate(['/generos'])}
         });        
    });

  }

  guardarCambios(genero:generoCreacionDTO):void{    
    
    this.generosService.editar(this.modelo.id,genero)
    .subscribe({
       next:(res)=>{this.router.navigate(['/generos']);},
       error:(ex)=>{console.log(ex)}
    }
    )            
  }
}
