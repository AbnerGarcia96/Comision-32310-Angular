import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelarComprasComponent } from './components/cancelar-compras/cancelar-compras.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';

const routes: Routes = [
  {path: 'compras', children:[
    {path: 'lista', component: ListaComprasComponent},//lista de compras realizadas
    {path: 'carrito', component: CarritoComprasComponent},//carrito de compras
    {path: 'cancelar', component: CancelarComprasComponent}//cancelar compras
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
