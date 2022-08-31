import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CursosComponent } from './cursos.component';

describe('Pruebas unitarias para CursosComponent', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ CursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene invalido cuando ingreso un solo campo', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls['nombre'];

    nombre.setValue('Angular');

    expect(formulario.invalid).toBeTrue();
  });

  it('El formulario se cambia a válido cuando ingreso los campos requeridos', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls['nombre'];
    const profesor = formulario.controls['profesor'];

    nombre.setValue('Angular');
    profesor.setValue('Abner');

    expect(formulario.invalid).toBeFalse();
  });

  it('Se renderiza el objeto de cursos cuando doy click al botón del formulario', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls['nombre'];
    const profesor = formulario.controls['profesor'];

    nombre.setValue('Angular');
    profesor.setValue('Abner Garcia');

    const boton = fixture.debugElement.query(By.css('#btnCrear'));
    boton.nativeElement.click();
    fixture.detectChanges();

    const listaCursosRef = fixture.debugElement.query(By.css('#lista-cursos'));

    expect(listaCursosRef).toBeTruthy();
  });
});
