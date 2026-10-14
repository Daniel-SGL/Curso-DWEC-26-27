// Enunciado: Ejercicio del uso CRUD en un carrito
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

import type { Cart } from "../../types/cart";


// añadir elementos al carrito

export function addToCart(cart: Cart, productId: number): Cart {

  return cart.some(p => p.id === productId) ? cart.map(p => p.id === productId ? { ...p, quantity: p.quantity + 1 } : p) : [...cart, { id: productId, quantity: 1 }];

}

// borrar elementos del carrito

export function removeFromCart(cart: Cart, productId: number): Cart | boolean {

  return cart.some(p => p.id === productId) ? cart.map(p => p.quantity > 0 ? { ...p, quantity: p.quantity - 1 } : p) : false;

}

// obtener el total del carrito

export function cartTotal(cart: Cart): number {

  return cart.reduce((acumulador, p) => acumulador + p.quantity, 0)

}

