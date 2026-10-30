// Enunciado: Ejercicio Set
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

import { type Category, type Product } from "../../../types/product";

export function distinctPrices(list: Product[]): number {

  return new Set(list.map(product => product.price)).size

}

//Aqui iria las funciones de la parte numero 2




//Ejercicio parte 3
export function stockByCategory(list: Product[]): Map<Category, number> {

  return list.reduce((map, product) => {
    const currentStock = map.get(product.category) ?? 0;
    map.set(product.category, currentStock + product.stock);
    return map;
  }, new Map<Category, number>());

}

