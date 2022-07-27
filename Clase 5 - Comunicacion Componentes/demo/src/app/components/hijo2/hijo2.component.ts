import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnInit {
  @Input() nombreEstudiante: string = '';
  @Output() eventoSalida: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  enviarDatos(){
    let datos = {
      id: '',
      error: true,
      mensaje: this.nombreEstudiante + " se cargó correctamente"
    }
    this.eventoSalida.emit(datos);
  }
}
