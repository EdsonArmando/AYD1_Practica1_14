import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule, } from "./app-routing.module";
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { TopBarComponent } from './components/top-bar/top-bar.component'
import {ReactiveFormsModule} from "@angular/forms";
import { DatosComponent } from './datos/datos.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AgregarestudianteComponent } from './agregarestudiante/agregarestudiante.component';
import {ListaEstudianteComponent} from "./ListaEstudiantes/listaEstudiante.component";
import { MatDialogModule } from '@angular/material/dialog';
import { PopupdatosComponent } from './components/popupdatos/popupdatos.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    DatosComponent,
    BienvenidaComponent,
    AgregarestudianteComponent,
      ListaEstudianteComponent,
      PopupdatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [PopupdatosComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
