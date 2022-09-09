import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { NuevoCursoComponent } from './components/nuevo-curso/nuevo-curso.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'crear', component: NuevoCursoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
