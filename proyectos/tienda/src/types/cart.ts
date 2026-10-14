// Crear un tipo (cart.ts) llamado CartLine que tenga el id del producto y la cantidad a comprar
// recuerda exportalo
//

export interface CartLine {

  id: number;
  quantity: number;

}

export type Cart = CartLine[]
