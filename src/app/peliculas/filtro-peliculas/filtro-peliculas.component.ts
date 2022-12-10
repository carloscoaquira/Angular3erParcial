import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {
  form:any;
  constructor(
    private formBuilder:FormBuilder,
    private location:Location,
    private activatedRoute:ActivatedRoute
    ) { }

  generos=[
    {id:1,nombre:'Drama'},
    {id:2,nombre:'Accion'},
    {id:3,nombre:'Comedia'}
  ]

 peliculas=[
  {titulo:'Spider-Man',enCines:false,proximosEstrenos:true,generos:[1,2],poster:'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'},
  {titulo:'Moana',enCines:true,proximosEstrenos:false,generos:[3],poster:'https://i.pinimg.com/550x/9f/2c/66/9f2c665c806b9bbb4b7daa6099b3fbd9.jpg'},
  {titulo:'Inception',enCines:false,proximosEstrenos:false,generos:[1,3],poster:'https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Inception_OST.jpg/220px-Inception_OST.jpg'}
 ]

peliculaOriginal=this.peliculas;

  formularioOriginal={
    titulo:'',
    generoId:0,
    proximosEstrenos:false,
    enCines:false
  };

  ngOnInit(): void {

    this.form=this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.form.valueChanges
    .subscribe((valores:any)=>{
      //console.log(valores);
      this.peliculas=this.peliculaOriginal;
      this.buscarPeliculas(valores);
      this.escribirParametrosBusquedaEnURL();
    }    
    )
  }//end init

  buscarPeliculas(valores:any)
  {
     if(valores.titulo){
      this.peliculas=this.peliculas.filter(
        pelicula => pelicula.titulo.indexOf(valores.titulo)!==-1 );
     }

     if(valores.generoId){
      this.peliculas=this.peliculas.filter(
        pelicula => pelicula.generos.indexOf(valores.generoId)!==-1 );
     }

     if(valores.proximosEstrenos){
      this.peliculas=this.peliculas.filter(
        pelicula => pelicula.proximosEstrenos);
     }

     if(valores.enCines){
      this.peliculas=this.peliculas.filter(
        pelicula => pelicula.enCines);
     }


  }

  Limpiar()
  {
    console.log('limpiando...');
    //console.log('Limpiar...');
     this.form.patchValue(this.formularioOriginal);
  }

  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params)=>{
        var objeto:any={};
        console.log(params);

      }
    )
  }

  private escribirParametrosBusquedaEnURL(){
     var queryString=[];
     var valoresFormulario=this.form.value; 

     if(valoresFormulario.generoId!='0'){

      queryString.push(`generoId=${valoresFormulario.generoId}`);
     }

     if(valoresFormulario.proximosEstrenos){
      queryString.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
     }

     if(valoresFormulario.enCines){

      queryString.push(`enCines=${valoresFormulario.enCines}`);
     }

     this.location.replaceState('peliculas/buscar',queryString.join('&'));

  }




}
