import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteAComponent } from './components/componente-a/componente-a.component';
import { ComponenteBComponent } from './components/componente-b/componente-b.component';
import { RutasModule } from './rutas.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteAComponent,
    ComponenteBComponent
  ],
  imports: [
    BrowserModule,
    RutasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
