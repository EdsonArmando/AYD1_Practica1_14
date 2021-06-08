import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { EstudiantesService } from 'src/app/estudiantes.service';
import { Estudiante } from 'src/app/Modelos/Estudiante';

@Component({
  selector: 'app-popupdatos',
  templateUrl: './popupdatos.component.html',
  styleUrls: ['./popupdatos.component.css']
})
export class PopupdatosComponent implements OnInit {

  estudiante : any
  carnet : any;
  nombre : any
  apellido: any
  nacionalidad : any
  sexo :any
  identidad_racial :any
  facultad : any
  carrera :any


  constructor(public dialogRef : MatDialogRef<PopupdatosComponent>,  @Inject(MAT_DIALOG_DATA) public data : any, public servicio : EstudiantesService) { }

  ngOnInit(): void {
    console.log(this.data.estudiante)
    this.carnet = this.data.estudiante.CARNE
    this.nombre = this.data.estudiante.NOMBRES
    this.apellido = this.data.estudiante.APELLIDO
    this.nacionalidad = this.data.estudiante.NACIONALIDAD
    this.sexo = this.data.estudiante.SEXO
    this.identidad_racial = this.data.estudiante.IDENTIDADRACIAL
    this.facultad = this.data.estudiante.FACULTAD
    this.carrera = this.data.estudiante.CARRERA
  }

  actualizar(){
    let est = new Estudiante(this.data.estudiante.DPI, this.carnet, this.nombre, this.apellido, this.nacionalidad, this.sexo, this.identidad_racial, this.facultad, this.carrera)
    this.servicio.editarEstudiante(est)
  }

  cerrar(){
    this.dialogRef.close()
  }

}
