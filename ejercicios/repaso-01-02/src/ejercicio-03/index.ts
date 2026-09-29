const stock: Record<string, number> = {
  teclados: 12,
  ratones: 0,
  monitores: 5,
  cables: 8
}

function resumenStock(stock: Record<string, number>):{
  total: number
  sinStock: number
}{
  let total = 0
  let sinStock = 0

  for(const elemento in stock){
    if(Object.hasOwn(stock,elemento)){
      const cantidad = stock[elemento]

      total += cantidad

      cantidad === 0 ? sinStock : null
    }
  }

  return {
    total,
    sinStock
  }
}
export function ejercicio03(): void {
  console.log('--- Caso principal ---')
  console.log(resumenStock(stock))

  console.log('--- Casos límite ---')
  console.log('Objeto vacío {}:', resumenStock({}))
  console.log('Todo agotado { a: 0, b: 0 }:', resumenStock({ a: 0, b: 0 }))
}
