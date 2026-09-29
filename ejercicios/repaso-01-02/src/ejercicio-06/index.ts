const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function analizarMatriz(matriz: number[][]): {
  suma: number
  maximo: number | null
} {
  let suma = 0
  let maximo: number | null = null

  for(const fila of matriz){
    for(const valor of fila){
      suma += valor

      if(maximo === null || valor > maximo){
        maximo = valor
      }
    }
  }
  return {
    suma,
    maximo
  }
}
export function ejercicio06(): void {
  console.log('--- Caso principal ---')
  console.log(analizarMatriz(matriz))

  console.log('--- Casos límite ---')
  console.log('Matriz vacía []:', analizarMatriz([]))
  console.log('Sub-array vacío [[]]:', analizarMatriz([[]]))
  console.log('Matriz con negativos [[-5, -2], [-9]]:', analizarMatriz([[-5, -2], [-9]]))
}
