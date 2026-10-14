// Enunciado: Mas barato con stock
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export function cheapestAvailable(list: Product[]): Product | undefined {

  return list
    .filter(product => product.stock > 0)
    .toSorted((product, product2) => product.price - product2.price)[0];

}
