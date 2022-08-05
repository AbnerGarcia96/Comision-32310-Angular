import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-nativas',
  templateUrl: './pipes-nativas.component.html',
  styleUrls: ['./pipes-nativas.component.css']
})
export class PipesNativasComponent implements OnInit {
  datos: any = {
    fecha: new Date(),
    texto: 'Texto de prueba para clase de Angular',
    monto: 1095.6,
    porcentaje: 0.15
  }

  constructor() { }

  ngOnInit(): void {
  }

}
