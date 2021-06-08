import { HttpClient, HttpResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private httpClient: HttpClient) { }

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

}
