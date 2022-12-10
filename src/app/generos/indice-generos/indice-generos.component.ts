import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { generoCreacionDTO, generoDTO } from '../generos';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  generos:generoCreacionDTO[]=[];
  columnasAMostrar=['id','nombre','acciones'];

  cantidadTotalRegistros:string;
  paginaActual=1;
  cantidadRegistrosAMostrar=10;

  constructor(private generosService:GenerosService) { }

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina:number,cantidadElementosAMostrar:number)
  {
    this.generosService.obtenerPaginado(pagina,cantidadElementosAMostrar)
     .subscribe({
        next:(respuesta:HttpResponse<generoDTO[]>)=>{
          this.generos=respuesta.body;
          this.cantidadTotalRegistros=respuesta.headers.get('cantidadTotalRegistros');
          console.log("cantidad total:" + this.cantidadTotalRegistros);
        },
        error:(ex)=>{console.log(ex)}
     }
     )

  }

  actualizarPaginacion(datos:PageEvent)
  {
    this.paginaActual=datos.pageIndex+1;
    this.cantidadRegistrosAMostrar=datos.pageSize;
    this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar);
  }

  borrar(id:number):void{
    this.generosService.borrar(id)
    .subscribe({
       next:(res)=>{console.log(res)},
       error:(ex)=>{console.log(ex)}
    });

  }

}