import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {
  id!: number;
  nombre!: string;
  apellido!: string;


  constructor(
    private ativatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ativatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);
      this.id = parseInt(parametros.get('id') || '0');
      this.nombre = parametros.get('nombre') || '';
      this.apellido = parametros.get('apellido') || '';
    });
  }

}
