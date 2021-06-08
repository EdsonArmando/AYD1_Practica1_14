import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './datos/datos.component';
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AgregarestudianteComponent } from './agregarestudiante/agregarestudiante.component';

const routes: Routes = [
 { path: "DatosEstudiante", component: DatosComponent},
 { path: "Bienvenida", component: BienvenidaComponent},
{ path: "AgregarEstudiante", component: AgregarestudianteComponent},
];
@NgModule({
  imports: [
    
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
