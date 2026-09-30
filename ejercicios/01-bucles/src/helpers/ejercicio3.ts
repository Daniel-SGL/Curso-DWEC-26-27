// Ejercicio uso de filter map y otros en TypeScript
// Crear programa que muestre el nombre de todos los alumnos
// Calcule la nota media de cada alumno
// Mostrar alumno con nota media mas alta
// Calcular la media global de la clase
//
// {nombre: "Luis", edad: 22, notas: [5,4,6,3] } 
// {nombre: "Angel", edad: 25, notas: [7,10,6,1] }
// {nombre: "Pedro", edad: 19, notas: [10,10,10,9] }
// {nombre: "Alvaro", edad: 20, notas: [7,8,6,7] }
//
// para declarar tipos de objetos en TypeScript uso type y el objeto comienza siempre en mayusculas

// ---- Declaracion de tipos ----

type Alumno = {
  nombre: string;
  edad: number;
  notas: number[];
}

// ---- Declaracion de variables ----
//

const alumnado: Alumno[] = [
 {nombre: "Luis", edad: 22, notas: [5,4,6,3] }, 
 {nombre: "Angel", edad: 25, notas: [7,10,6,1] },
 {nombre: "Pedro", edad: 19, notas: [10,10,10,9] },
 {nombre: "Alvaro", edad: 20, notas: [7,8,6,7] },
]

// Obten los nombres (Solo los nombres) de todos los alumnos


function obtenerNombres(alumnos : Alumno[]){
  return alumnos.map( (alumno) => alumno.nombre )
}

const obtenerNombresV2 = (alumnos: Alumno[]) => alumnos.map( (alumno) => alumno.nombre )

// ---- Iniciarlizar el ejercicio ----
//
 console.log("El nombre de los alumnos es: ")
 console.log(obtenerNombres(alumnado))
