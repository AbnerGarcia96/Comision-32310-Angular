import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos: any;
  constructor(
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.obtenerCursos();
  }

}
