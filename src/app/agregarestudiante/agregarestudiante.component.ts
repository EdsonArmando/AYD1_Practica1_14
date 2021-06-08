import { Component, OnInit } from '@angular/core';
import {EstudiantesService} from "../estudiantes.service";
import { Estudiante } from '../Modelos/Estudiante'; 
@Component({
  selector: 'app-agregarestudiante',
  templateUrl: './agregarestudiante.component.html',
  styleUrls: ['./agregarestudiante.component.css']
})
export class AgregarestudianteComponent implements OnInit {

  constructor(private servicioesdutiante:EstudiantesService) { }

  ngOnInit(): void {
  }

  async crearEstudiante(dpi: string,carne:any,nombres:string,apellido:string,nacionalidad:string,sexo:string,identidad:string,facultad:string,carrera:string){
  const estu =new  Estudiante(dpi,carne,nombres,apellido,nacionalidad,sexo,identidad,facultad,carrera);
await this.servicioesdutiante.addEstudiante(estu);
}

}
