import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { SinTestComponent } from './components/sin-test/sin-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    MensajeComponent,
    SinTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
