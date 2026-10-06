// Enunciado: ¿Se puede comprar?
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export function canBuy(list: Product[], id: number, quantity: number): boolean {

  return list.find(product => product.id === id) !== undefined ? ((quantity >> 0) && (list[id].stock >= quantity) ? true : false) : false

}
