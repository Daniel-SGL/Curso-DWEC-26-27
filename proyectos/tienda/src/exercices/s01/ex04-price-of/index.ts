// Enunciado: Precio por ID
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export function priceOf(list: Product[], id: number): number | null {

  return list.find(product => product.id === id) !== undefined ? list.find(product => product.id === id)?.price : null

}
