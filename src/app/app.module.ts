import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MesesComponent } from './meses/meses.component';
import { DiasComponent } from './dias/dias.component';
import { ComidasComponent } from './comidas/comidas.component';
import { NombresPaisesComponent } from './nombres-paises/nombres-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    MesesComponent,
    DiasComponent,
    ComidasComponent,
    NombresPaisesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
