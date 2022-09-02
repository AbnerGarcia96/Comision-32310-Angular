import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/cursos';
import { CursosService } from 'src/app/services/cursos.service';
import { cargarCursos, cursosCargados } from 'src/app/state/actions/cursos.action';
import { AppSate } from 'src/app/state/app.state';
import { selectorCargandoCursos } from 'src/app/state/selectors/cursos.selector';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cargando$!: Observable<boolean>;

  constructor(
    private store: Store<AppSate>,
    private cursos: CursosService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(cargarCursos());
    this.cursos.obtenerCursos().subscribe((cursos: Curso[]) => {
      this.store.dispatch(cursosCargados({cursos: cursos}));
    });
    this.cargando$ = this.store.select(selectorCargandoCursos);
  }

}
