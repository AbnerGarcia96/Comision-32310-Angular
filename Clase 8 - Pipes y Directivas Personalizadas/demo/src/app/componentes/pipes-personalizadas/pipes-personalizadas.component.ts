import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-personalizadas',
  templateUrl: './pipes-personalizadas.component.html',
  styleUrls: ['./pipes-personalizadas.component.css']
})
export class PipesPersonalizadasComponent implements OnInit {
  cursos: any = [{
    nombre: 'Angular',
    duracion: {
      fechaInicio: new Date(2022, 0, 1),
      fechaFin: new Date(2022, 3, 1)
    },
    descripcion: 'Curso de Angular intermedio'
  },{
    nombre: 'ReactJS',
    duracion: {
      fechaInicio: new Date(2022, 3, 1),
      fechaFin: new Date(2022, 6, 1)
    },
    descripcion: 'Curso de Angular intermedio'
  },{
    nombre: 'Angular',
    duracion: {
      fechaInicio: new Date(2022, 6, 1),
      fechaFin: new Date(2022, 11, 1)
    },
    descripcion: 'Curso de Angular intermedio'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
