// Ejercicio 1 de JavaScript
//
/*

console.log("Hola Mundo");
// Tipos de datos en JavaScript
//
// String y number
// '' "" `comillas francesas`
// var let const
let nombre = "Daniel"
let apellidos = "SG"
let aniosTrabajo = 0
console.log(`Hola Bienvenidos, me llamo ${nombre}, ${apellidos} y llevo trabajando ${aniosTrabajo} años`);
console.log(typeof($aniosTrabajo));

// validaciones basicas == ===
//
// == <-- significa si el valor de la izquierda es igual al valor de la derecha
// === <-- significa si el valor y tipo de la izquierda coincide con el valor y tipo de la derecha
//'5' === 5  <-- esto devuelve false
//'5' == 5  <-- esto devuelve true

// ternarias evaluacion_expresion ? verdadero : falso
//


const edad = "15"
edad > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");
*/

//Dada la edad, los minutos y los segundos. comprobar si la edad es un numero positivo y mayor que 18 y segundo comprobar si la hora y los minutos son valores validos dentro de nuestro sistema de enumeracion
//
const edad = 24
const hora = 23
const minutos = 59

edad > 0 ? (edad > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")) : console.log("La edad no puede ser negativa");
(hora >= 0 && hora < 24) && (minutos >= 0 && minutos < 60) ? console.log("La hora es correcta") : console.log("La hora es incorrecta");
