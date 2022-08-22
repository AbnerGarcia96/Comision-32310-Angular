import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { CursosService } from './services/cursos.service';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListaCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
