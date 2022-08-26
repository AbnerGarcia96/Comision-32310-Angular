import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { CursosComponent } from './components/cursos/cursos.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';

const routes: Routes = [
  {path: '', component: CursosComponent ,children: [
    {path: 'lista', component: ListaCursosComponent},
    {path: 'nuevo', component: NuevoComponent, canActivate: [AdminGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
