import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {EstudiantesService} from "../estudiantes.service";

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
                private apiRest: EstudiantesService) {
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
}
