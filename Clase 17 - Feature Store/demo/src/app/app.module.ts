import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { LoginComponent } from './auth/components/login/login.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import * as fromSesion from './core/state/sesion.reducer';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forFeature(fromSesion.sesionFeatureKey, fromSesion.reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
