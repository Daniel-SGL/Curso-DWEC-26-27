//Crear una funcion que mientras sea verdad compruebe todos los numeros de un array pasados como parametro, guarde los positivos en un array llamado "positivos" y los negativos en una array llamado "negativos"
//Y calcule la suma de todos ellos de manera independiente

// @autor: Daniel SG
//Declaracion de variables

function clasificarNumeros(numeros: number[]){
  const positivos:number[] = []
  const negativos:number[] = []
  let sumaPositivos:number = 0
  let sumaNegativos:number = 0

  for(const numero of numeros){
    if(numero > 0){
      positivos.push(numero)
      sumaPositivos += numero
    }else{
      negativos.push(numero)
      sumaNegativos += numero
    }
  }
  return {
    positivos,
    negativos,
    sumaPositivos,
    sumaNegativos
  }
}

//-------------------Inicio de la aplicacion---------------------- 
const datos:number[] = [ 1,-10,25,11,9,5,-6,8,-5,9,12,-10]

const resultado = clasificarNumeros(datos)

console.log(`El array de positivos es: ${resultado.positivos} \n 
            ----------La suma de los positivos es: ${resultado.sumaPositivos} \n
            El array de negativos es: ${resultado.negativos} \n
            ----------La suma de los negativos es: ${resultado.sumaNegativos}`)


