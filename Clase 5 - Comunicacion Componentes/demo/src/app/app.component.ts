import { Component, ViewChild } from '@angular/core';
import { Hijo1Component } from './components/hijo1/hijo1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaEstudiantesPadre: string[] = [
    'Abner',
    'Jorge',
    'Fran',
    'Fernando'
  ];
  mensajeObtenido: string = '';
  @ViewChild(Hijo1Component) componenteHijo1!: Hijo1Component;

  ngAfterViewInit(): void {
    console.log("Llamado desde el ngAfterViewInit: ", this.componenteHijo1);
  }

  obtenerInformacion(texto: string){
    this.mensajeObtenido = texto;
  }

  cambiarDatos(){
    this.componenteHijo1.listaEstudiantesHijo = [
      'Jorge',
      'Roman',
      'Juan'
    ]
  }
}
