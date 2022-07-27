import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Hijo1Component } from './components/hijo1/hijo1.component';
import { Hijo2Component } from './components/hijo2/hijo2.component';

@NgModule({
  declarations: [
    AppComponent,
    Hijo1Component,
    Hijo2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
