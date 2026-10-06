// Enunciado: Proyecto creacion de una Tienda
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

// ---------- Importaciones ----------
//

import type { Product } from "./types/product";
import { products } from "./data/products";
import { allInStock } from "./exercices/s01/ex06-think";

// mostrar todos los productos
//

console.log("Catalogo de productos TechStore", ...products)

// mostrar el primer producto
//
const first: Product | undefined = products[0]
console.log("Primer producto: ", first)
//
// mostrar el primer precio del primer producto

console.log("Precio del primer producto: ", first !== undefined ? first.price : "No existe el producto")

console.log(allInStock(products))
