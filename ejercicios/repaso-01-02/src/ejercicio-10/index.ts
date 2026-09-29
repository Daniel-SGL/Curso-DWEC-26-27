
type Linea = {
  nombre: string
  unidades: number
  precio: number
}

const cesta: Linea[] = [
  { nombre: 'Teclado', unidades: 1, precio: 25},
  { nombre: 'Monitor', unidades: 2, precio: 180},
  { nombre: 'Cable', unidades: 0, precio: 8}
]

function resumenCesta(cesta: Linea[]): {
  base: number
  conIva: number
  pendientes: number
} {
  let base = 0
  let pendientes = 0

  for(const linea of cesta){
    base += linea.unidades * linea.precio

    linea.unidades === 0 ? pendientes++ : null

    const etiqueta = linea.unidades === 0 ? 'Pendiente' : 'En cesta'

    console.log(`Producto: ${linea.nombre} esta ${etiqueta}`)
  }

  const conIva = Number((base * 1.21).toFixed(2))
  return {
    base,
    conIva,
    pendientes
  }
}

export function ejercicio10(): void {
  console.log('--- Caso principal ---')
  console.log(resumenCesta(cesta))

  console.log('--- Caso límite ---')
  console.log('Cesta vacía []:', resumenCesta([]))
}
