import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesNativasComponent } from './componentes/pipes-nativas/pipes-nativas.component';
import { PipesPersonalizadasComponent } from './componentes/pipes-personalizadas/pipes-personalizadas.component';
import { TransformarPipe } from './pipes/transformar.pipe';
import { DirectivasComponent } from './componentes/directivas/directivas.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { IteradorDirective } from './directives/iterador.directive';

@NgModule({
  declarations: [
    AppComponent,
    PipesNativasComponent,
    TransformarPipe,
    PipesPersonalizadasComponent,
    DirectivasComponent,
    ResaltadoDirective,
    IteradorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // {provide: LOCALE_ID, useValue: 'sp-ES'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
