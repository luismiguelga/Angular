import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formulario3ReactivoComponent } from './formulario3-reactivo/formulario3-reactivo.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    Formulario2Component,
    Formulario3ReactivoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

