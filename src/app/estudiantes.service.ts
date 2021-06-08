import { HttpClient, HttpResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

const endpointMongo = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private httpClient: HttpClient) { }

  urlserver = "http://localhost:3000"

addEstudiante(estudiante:any){
return new Promise<void>((resolve, reject) => {
    this.httpClient.post('http://localhost:3000' +'/estudiante', estudiante).subscribe((resp: any) => {
     
     resolve();
     console.log(resp);
if(resp["status"] == true){ alert("Estudiante agregado con exito");}
     else{
      alert("El Estudiante ya existe DPI repetido");
    }
    });
   });
}
public getEstudiantes(): Observable<any>{
    return this.httpClient.get(endpointMongo + 'estudiantes');
}

editarEstudiante(estudiante : any){
  this.httpClient.post(this.urlserver + "/actualizarestudiante", estudiante).subscribe(data => {
    console.log(data)
  })
}

eliminarestudiante(estudiante : any){
  this.httpClient.delete(this.urlserver + "/borrarestudiante", estudiante).subscribe(data => {
    console.log(data)
  })
}
}
