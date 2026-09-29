
type Producto = {
  id: number
  nombre: string
  precio: number
  rebajado: boolean
}

const productos: Producto[] = [
  {id: 1, nombre: 'Teclado', precio: 25, rebajado: false},
  {id: 2, nombre: 'Raton', precio: 15, rebajado: true},
  {id: 3, nombre: 'Monitor', precio: 180, rebajado: false},
  {id: 4, nombre: 'Altavoces', precio: 45, rebajado: true},
  {id: 5, nombre: 'Webcam', precio: 60, rebajado: false}
]

function etiquetasDisponibles(catalogo: Producto[]): string[] {
  return catalogo
  .filter(producto => !producto.rebajado)
  .map(producto => `ID : ${producto.id} - Nombre: ${producto.nombre} - Precio: ${producto.precio} €`)
}
export function ejercicio07(): void {
  console.log('--- Caso principal ---')
  console.log(etiquetasDisponibles(productos))

  console.log('--- Caso límite ---')
  console.log('Array vacío []:', etiquetasDisponibles([]))
}
