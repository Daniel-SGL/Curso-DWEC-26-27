// Enunciado: Crear una funcion que permita añadir productos a mi Data
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
// Restricciones: 

// ------------------------- Importaciones -------------------------
import { products } from "../../data/products";
import type { Product } from "../../types/product";

// const copy = [...products]
const original = { name: 'teclado', price: 80 }
const other = original;
other.price = 0;
console.log(original.price);

export type NewProduct = Omit<Product, 'id'>; //***** <--- un utility type (tipo de utilidad)
// crea un nuevo tipo igual que product pero sin id


// crear una funcion que me actualice el precio de los productos, le paoso id y el nuevo precio
//

function updatePrice(list: Product[], id: number, price: number): Product[] {

  return list
    .map(p => p.id === id ? { ...p, price } : p)

}

// actualizaciones parciales
//

export type ProductChanges = Partial<Omit<Product, 'id'>>;
// se lee de dentro hacia fuera --> Quita el id de Product, y lo que queda hazlo Opcional
// Con esto me aseguro que no voy a cambiar nunca el id

function updateProduct(list: Product[], id: number, change: ProductChanges): Product[] {

  return list
    .map(p => p.price === id ? { ...p, ...change } : p)

}

// updateProduct(products, 1, {stock:10, name:'Teclado Gaming'})


// CRUD <--- C create , R read , U update , D delete

function deleteProduct(list: Product[], id: number): Product[] {

  list
    .filter(p => p.id !== id)

}



// Crear un tipo (cart.ts) llamado CartLine que tenga el id del producto y la cantidad a comprar
// recuerda exportalo

// añadir elementos al carrito



// borrar elementos del carrito



// obtener el total del carrito



// ------------------------- inicio de la aplicacion -------------------------
