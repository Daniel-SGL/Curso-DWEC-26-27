const numeros = [7, 12, 0, -3, 8, 15, 4]

function contarPorParidad(numeros: number[]):{
  pares: number
  impares: number
} {
  let pares = 0
  let impares = 0
  for(const numero of numeros){
    numero % 2 === 0 ? pares++ : impares++
  }

    return {
      pares,
      impares
    }
}
export function ejercicio02(): void {
  console.log('--- Caso principal ---')
  console.log(contarPorParidad(numeros))

  console.log('--- Casos límite ---')
  console.log('Array vacío:', contarPorParidad([]))
  console.log('Solo cero [0]:', contarPorParidad([0]))
  console.log('Negativo par [-4]:', contarPorParidad([-4]))
  console.log('Negativo impar [-3]:', contarPorParidad([-3]))
}
