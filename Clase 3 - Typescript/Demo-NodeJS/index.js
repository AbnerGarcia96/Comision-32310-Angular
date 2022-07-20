var mensaje1 = "Hola, estoy triste :( ";
var mensaje2 = "Pero eliminaron a River de la libertadores";
var mensaje3 = mensaje1 + mensaje2;
var n1 = 1.5;
var variableBooleana = true;
var arreglo1 = [
    "Item 1",
    "Item 2"
];
arreglo1.push("Item 3");
var catalogo;
(function (catalogo) {
    catalogo[catalogo["Si"] = 1] = "Si";
    catalogo[catalogo["No"] = 2] = "No";
})(catalogo || (catalogo = {}));
function queTipoSoy(argumento) {
    return argumento;
}
var soyString = queTipoSoy('Hola Mundo');
var soyNumbero = queTipoSoy(100);
var soyArreglo = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var soyExplicito = queTipoSoy(100);
console.log(catalogo);
