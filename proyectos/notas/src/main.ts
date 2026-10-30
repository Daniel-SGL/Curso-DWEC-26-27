import { getElement } from "./components/dom";
import { products } from "./services/products";


const h1Product = document.createElement("h1");

const divProducts = getElement("#products", HTMLDivElement);

h1Product.classList.add("h1Product");
h1Product.textContent = "Titulo h1Product";

divProducts.append(h1Product);

// un li con todos los productos que tengo

const list = getElement("#student-list", HTMLUListElement);

for (const product of products) {

  const liProduct = document.createElement("li")
  liProduct.textContent = `Nombre: ${product.name} - Precio: ${product.price} - Stock: ${product.stock}`

  list.append(liProduct);

}


