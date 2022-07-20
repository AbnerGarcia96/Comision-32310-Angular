let mensaje1: string = "Hola, estoy triste :( ";
let mensaje2: string = "Pero eliminaron a River de la libertadores";
const mensaje3: string = mensaje1 + mensaje2;
let n1: number = 1.5;
let variableBooleana: boolean = true;
let arreglo1: string[] = [
    "Item 1",
    "Item 2"
]
arreglo1.push("Item 3");
enum catalogo {
    Si = 1,
    No = 2
}


function queTipoSoy<T>(argumento: T): T {
    return argumento;
}

 let soyString  = queTipoSoy('Hola Mundo');
 let soyNumbero = queTipoSoy( 100 );
 let soyArreglo = queTipoSoy( [1,2,3,4,5,6,7,8,9,10] );
 
 let soyExplicito = queTipoSoy<number>( 100 );
  

console.log(catalogo);