import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {EstudiantesService} from "../estudiantes.service";
import { Estudiante } from '../Modelos/Estudiante';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupdatosComponent } from '../components/popupdatos/popupdatos.component';

@Component({
    selector : 'app-listaEstudiante-bar',
    templateUrl: './listaEstudiante.component.html',
    styleUrls: ['./listaEstudiante.component.css']
})
export class ListaEstudianteComponent implements OnInit{
    LoginForm;
    // @ts-ignore
    data;
    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private apiRest: EstudiantesService, public dialog : MatDialog) {
        this.LoginForm = this.formBuilder.group({
            nombre: '',
            password: ''
        });
    }
    ngOnInit(): void {
        this.apiRest.getEstudiantes().subscribe((data: {}) => {
            // @ts-ignore
            this.data = data.listaEstudiantes;
            console.log(this.data);
        });
    }

    openDialog(event: any, usuario : Estudiante){

        this.dialog.open(PopupdatosComponent, {
            data : {
                estudiante : usuario
            }
        })
    }

    eliminar(event: any, usuario : Estudiante){
        this.apiRest.eliminarestudiante(usuario)
    }
}
