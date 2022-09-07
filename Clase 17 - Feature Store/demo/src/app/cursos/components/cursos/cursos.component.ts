import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CursosService } from '../../services/cursos.service';
import { cargarCursos, cursosCargados } from '../../state/cursos.actions';
import { CursoState } from '../../state/cursos.reducer';
import { selectCargandoState } from '../../state/cursos.selectors';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cargando$!: Observable<boolean>;

  constructor(
    private store: Store<CursoState>,
    private cursoService: CursosService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(cargarCursos());
    this.cursoService.obtenerCursos().subscribe((cursos) => {
      this.store.dispatch(cursosCargados({
        cursos: cursos
      }));
    });
    this.cargando$ = this.store.select(selectCargandoState);
  }

}
