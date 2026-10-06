// Enunciado: Precios con IVA
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

const VAT = 0.21;

/** 
  *
  * Recibe una lista de productos y promete devolver una lista de numeros con el precio incluyendo el IVA
  * 
  * */
export function pricesWithVat(products: Product[]): number[] {

  return products.map(products => Math.round(products.price * (1 + VAT)))

}
