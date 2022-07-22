import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { DirectivaPersonalizadaDirective } from './directives/directiva-personalizada.directive';
import { DirectivaPersonalizada2Directive } from './directives/directiva-personalizada2.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    DirectivaPersonalizadaDirective,
    DirectivaPersonalizada2Directive
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
