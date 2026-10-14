// Enunciado: Resumen numerico
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export interface Summary {
  products: number; // cuántos productos distintos hay
  units: number; // suma del stock de todos
  value: number; // suma de price × stock de cada producto
}

export function summary(list: Product[]): Summary {

  return list.reduce<Summary>(
    (acc, product) => ({
      products: acc.products + 1,
      units: acc.units + product.stock,
      value: acc.value + product.price,
    }),
    { products: 0, units: 0, value: 0 }
  );
}
