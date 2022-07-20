var Personaje = /** @class */ (function () {
    function Personaje(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Personaje;
}());
var nombre = "Miguelo";
var edad = 30;
var PERSONAJE = new Personaje(nombre, edad);
var PERSONAJE2 = {
    nombre: "Peter Parker",
    poderes: ["Lanzar telarañas", "Trepar muros"]
};
console.log(PERSONAJE2);
