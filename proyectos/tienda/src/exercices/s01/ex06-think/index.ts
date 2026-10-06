// Enunciado: Piensa
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

import type { Product } from '../../../types/product';

//export const allInStock = (list: Product[]): boolean => list.every((p) => p.stock > 0);

// Pregunta 1 · ¿Qué devuelve allInStock([])?
// Devuelve true 
// Pregunta 2 · ¿Es una respuesta razonable para una tienda sin productos? ¿Porqué?
// No, porque la funcion deberia de verificar que la lista pasada como parametro no esta vacia y en caso de tener productos que dichos productos todos tengan stock
// Pregunta 3 · ¿Cómo cambiarías la función para que una tienda vacía devuelva false?
// Respuesta (escribe el código en una línea): 
export const allInStock = (list: Product[]): boolean => list.length !== 0 ? list.every((p) => p.stock > 0) : false
