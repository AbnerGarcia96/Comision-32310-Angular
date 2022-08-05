import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

export interface Curso { 
  nombre: string;
  comision: string;
  profesor: string;
  numeroEstudiantes: number;
  matriculaAbierta: boolean;
}

const ELEMENT_DATA: Curso[] = [
  {nombre: 'Angular', comision: '32310', profesor: 'Abner Garcia', numeroEstudiantes: 65, matriculaAbierta: true},
  {nombre: 'VueJS', comision: '33320', profesor: 'Abner Garcia', numeroEstudiantes: 34, matriculaAbierta: true},
  {nombre: 'ReactJS', comision: '35310', profesor: 'Abner Garcia', numeroEstudiantes: 87, matriculaAbierta: false},
  {nombre: 'UI/UX', comision: '31310', profesor: 'Abner Garcia', numeroEstudiantes: 12, matriculaAbierta: true},
  {nombre: '.NET', comision: '38310', profesor: 'Abner Garcia', numeroEstudiantes: 90, matriculaAbierta: false},
  {nombre: 'SQL', comision: '31310', profesor: 'Abner Garcia', numeroEstudiantes: 44, matriculaAbierta: true},
  {nombre: 'Web 3.0', comision: '32380', profesor: 'Abner Garcia', numeroEstudiantes: 63, matriculaAbierta: true}
]

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  columnas: string[] = ['nombre', 'comision', 'profesor', 'numeroEstudiantes', 'matriculaAbierta', 'acciones'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) tabla!: MatTable<Curso>;
  
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  eliminar(elemento: Curso){
    this.dataSource.data = this.dataSource.data.filter((curso: Curso) => curso.comision != elemento.comision);
  }

  editar(elemento: Curso){
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '350px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        const item = this.dataSource.data.find(curso => curso.comision === resultado.comision);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }
}
