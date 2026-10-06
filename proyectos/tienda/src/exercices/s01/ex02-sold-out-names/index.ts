// Enunciado: Nombres productos agotados
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export function soldOutNames(list: Product[]): string[] {

  return list.filter(productos => productos.stock === 0).map(productos => productos.name)

}
