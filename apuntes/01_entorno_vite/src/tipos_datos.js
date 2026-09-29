// Funcion que le pasa como parametro un numero en grados celsius y lo transforma a grados kelvin

V1
function celsiusToKelvin(celsius){
  let kelvin = celsius + 273.15
  return kelvin
}

V2
function celsiusToKelvin2(celsius){ 
  return celsius + 273.15
}

V3
const celToKel = (celsius) => {
  return celsius + 273.15
}

V4
const cToK = ( c ) => c + 273.15

// Funcion que le pase como parametro dos numeros y me los ordene

function orden = (a,b) => a>b ? a : b;


// Funcion que pase de celsius a kelvin pero comprobando que celsius es un numero , que la temperatura no puede estar por debajo del cero absoluto y el resultado me lo das con solo 2 cifras decimales
// isNaN <-- Buscamos lo que significa
// ¿Como truncamos un numero a 2 cifras decimales?
