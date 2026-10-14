// Enunciado: Catalogo ordenado
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export function catalog(list: Product[]): string[] {

  return list
    .toSorted((productA, productB) => productA.category.localeCompare(productB.category) || productA.price - productB.price)
    .map(product => `${product.category} - ${product.name} - ${product.price} €`)

}
