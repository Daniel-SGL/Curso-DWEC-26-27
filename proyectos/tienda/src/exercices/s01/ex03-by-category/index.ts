// Enunciado: La web tiene un menu para ver los productos de una sola categoria
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

import type { Category, Product } from "../../../types/product";

export function byCategory(list: Product[], category: Category): Product[] {

  return list.filter(product => product.category === category)

}
