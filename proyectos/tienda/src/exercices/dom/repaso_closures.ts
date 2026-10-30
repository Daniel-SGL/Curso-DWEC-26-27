
// Funcion fabrica que genere saludos

export function makeGreeater(greeating: string): (name: string) => string {

  return (name) => `${greeating} - ${name}`

}

const morning = makeGreeater("Buenos dias")
const evening = makeGreeater("Buenas noches")

console.log(morning("Angel"))

// conversor de diferentes unidades

export function makeConverter(factor: number): (value: number) => number {

  return (value) => factor * value;

}

const kmToMiles = makeConverter(0.621371)
const eurToDolar = makeConverter(1.12)

console.log(kmToMiles(10).toFixed(2)) // <-- 6.21 millas son 10 kms
console.log(eurToDolar(100).toFixed(2)) // <-- 112.21 dolares son 100 euros

// Crear un marcador de cualquier competicion

export function makeScoreBoard(): { scoreHome: () => void; scoreAway: () => void; result: () => string } {
  // declaro las variables que acumulan las puntuciones del home y del away
  let home = 0;
  let away = 0;
  return {
    scoreHome: () => { home += 1 },
    scoreAway: () => { away += 1 },
    result: () => ` ${home} -- ${away}`

  }

}

const granadaToMalaga = makeScoreBoard()
const finalCamp = makeScoreBoard()

granadaToMalaga.scoreHome()
granadaToMalaga.scoreHome()
granadaToMalaga.scoreAway()
console.log(granadaToMalaga.result())
