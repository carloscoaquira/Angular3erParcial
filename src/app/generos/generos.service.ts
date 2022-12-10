import { Injectable } from '@angular/core';
import { generoDTO, generoCreacionDTO } from './generos';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private apiURL=environment.apiURL;
  constructor(private http:HttpClient) { }

  public obtenerPaginado(pagina:number,cantidadRegistrosAMostrar:number):Observable<any>{
    let params=new HttpParams();
    params=params.append('pagina',pagina.toString());
    params=params.append('recordsPorPagina',cantidadRegistrosAMostrar.toString());
    return this.http.get<generoDTO[]>(this.apiURL,{observe:'response',params}) 
  }

  public crear(genero:generoCreacionDTO){
    return this.http.post(this.apiURL,genero);
  }

  public obtenerPorId(id:number):Observable<generoDTO>{
    return this.http.get<generoDTO>(`${this.apiURL}/${id}`);    
  }

  public editar (id:number,genero:generoCreacionDTO)
  {
    return this.http.put(`${this.apiURL}/${id}`,genero)
  }

  public borrar(id:number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }


  
}
