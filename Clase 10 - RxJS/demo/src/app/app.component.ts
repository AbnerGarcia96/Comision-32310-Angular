import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, filter, forkJoin, from, interval, map, mergeMap, Observable, of, scan, Subscription, tap } from 'rxjs';
import { RxjsService } from './services/rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit{
  profesores: any = [];
  cursos: any = [];
  cursosSuscripcion: Subscription;
  cursos$: Observable<any>;

  constructor(
    private rxjsService: RxjsService
  ){
    // this.rxjsService.obtenerPromiseProfesores().then((profesores) => {
    //   console.log('Estoy desde el promise de profesores: ', profesores);
    //   this.profesores = profesores;
    // }).catch((error) => {
    //   console.log(error);
    // });

    this.rxjsService.obtenerObservableProfesores().subscribe((profesores) => {
      console.log('Estoy desde el observable de profesores: ', profesores);
      this.profesores = profesores;
    });

    this.cursosSuscripcion = this.rxjsService.obtenerObservableCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });

    this.cursos$ = this.rxjsService.obtenerObservableCursos();

    console.log(this.cursos$);
  }

  ngOnInit(): void {
    this.rxjsService.obtenerObservableAlumnos().pipe(
      map((alumnos: any[]) => alumnos.filter(alumno => alumno.curso === 'Angular'))
    ).subscribe((alumnos) => {
      console.log('Desde el subscribe de alumnos', alumnos);
    });

    from([1,2,3,4,5,6,7,8,9,10]).pipe(
      tap(valor => console.log('TAP antes del scan', valor)),
      scan((acumulador: number, valor: number) => acumulador+valor),
      filter((valor: number) => valor % 2 === 0),
      tap(valor => console.log('TAP despes del filter', valor))
    ).subscribe((data) => {
      console.log("Probando operadores", data);
    });

    // const letras = of('a', 'b', 'c');
    // letras.pipe(
    //   mergeMap(
    //     x => interval(1000).pipe(map(i => x+i))
    //   )
    // ).subscribe(x => console.log('Utilizando el MergeMap', x));

    const fork = forkJoin({
      sourceOne: of('Hola'),
      sourceTwo: of('Mundo').pipe(delay(1000))
    }).subscribe((datos) => {
      console.log('Utilizando el forkjoin', datos)
    })
  }

  ngOnDestroy(): void {
    console.log('Ejecutando ngOnDestroy para desuscrubirme del observable');
    this.cursosSuscripcion.unsubscribe();
  }

  agregarNuevoProfesor(){
    let curso = {
      id: 1,
      nombre: 'UI/UX',
      comision: '32450'
    }
    this.rxjsService.agregarNuevoCurso(curso);
  }
}
