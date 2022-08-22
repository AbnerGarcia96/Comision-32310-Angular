import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { CancelarComprasComponent } from './components/cancelar-compras/cancelar-compras.component';


@NgModule({
  declarations: [
    ListaComprasComponent,
    CarritoComprasComponent,
    CancelarComprasComponent
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule
  ]
})
export class ComprasModule { }
