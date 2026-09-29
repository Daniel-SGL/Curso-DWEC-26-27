
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

function rebajar(catalogo: Producto[], id: number): Producto[] {
  return catalogo.map(p => {
    if(p.id !== id){
      return p
    }

    const precioNuevo = Number((p.precio * 0.9).toFixed(2))

    return {
      id: p.id,
      nombre: p.nombre,
      precio: precioNuevo,
      rebajado: true
    }
  })
}

export function ejercicio09(): void {
  console.log('--- Rebajar monitor (id: 3) ---')
  const catalogoModificado = rebajar(productos, 3)
  console.log('Catálogo modificado (monitor):', catalogoModificado[2])
  console.log('Catálogo original sin cambios (monitor):', productos[2])

  console.log('--- Casos límite ---')
  console.log('ID inexistente (id: 99):', rebajar(productos, 99))
  console.log('Comprobación de inmutabilidad del array:', productos !== catalogoModificado)
}
