//Crear una funcion que se le pase como parametro un texto y lo encripte.
//Añadir una funcion inversa que una cadena de texto encriptada la desencripte
//Nota busca alguna libreria que permita generar cadenas encriptadas de forma segura
// @autor: Daniel SG
// Investigacion: xxxxx, xxxx
// crypto y libsodium-wrappers
//

import { Buffer } from 'node:buffer';
import { randomBytes, createCipheriv, createDecipheriv } from 'crypto';

const ALGORITMO = 'aes-256-gcm'

const CLAVE_HEX = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"; 
const CLAVE_SECRETA = Buffer.from(CLAVE_HEX, 'hex');

function cifrar(frase: string){
  const vectorInicializacion = randomBytes(12);
  const cifrado = createCipheriv(ALGORITMO,CLAVE_SECRETA, vectorInicializacion)

  let fraseCifrada = cifrado.update(frase, 'utf8', 'hex')
  fraseCifrada += cifrado.final('hex')

  const tag = cifrado.getAuthTag().toString('hex')

  return {
    fraseCifrada,
    vectorInicializacion: vectorInicializacion.toString('hex'),
    tag
  }
}


