import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformar'
})
export class TransformarPipe implements PipeTransform {
  meses: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  transform(value: {fechaInicio: Date, fechaFin: Date}, ...args: any[]): string {
    /*
    {
      fechaInicio: Date,
      fechaFin: Date
    }
    */
    const texto = args[0] || '';
    const texto2 = args[1] || '';

    let resultado: string;

    resultado = "De " + this.meses[value.fechaInicio.getMonth()] + " a " + this.meses[value.fechaFin.getMonth()] /* Mes fecha fin */
    
    if(texto === 'uppercase')
      return resultado.toUpperCase();
    else{
      return resultado;
    }
  }

}
