// Enunciado: Etiquetas
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export function tags(list: Product[]): String[] {

  return list.map(producto => `#${producto.id} ${producto.name} - ${producto.price} €`)

}
