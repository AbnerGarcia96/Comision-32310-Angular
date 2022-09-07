import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoState } from '../../state/cursos.reducer';
import { selectCursosCargadosState } from '../../state/cursos.selectors';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Curso[] | undefined>;
  
  constructor(
    private store: Store<CursoState>
  ) {
  }

  ngOnInit(): void {
    this.cursos$ = this.store.select(selectCursosCargadosState);
  }

}
