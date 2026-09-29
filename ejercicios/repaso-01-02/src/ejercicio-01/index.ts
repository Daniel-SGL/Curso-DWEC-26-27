const lecturas = ['21.5','19','','23.5','error','20']

function analizarLecturas(lecturas: string[]): {
  validas: number
  descartadas: number
  media: string
} {
  let acumulador = 0
  let validas = 0
  let descartadas = 0

  for(const lectura of lecturas){
    const numero = lectura !== '' ? Number(lectura) : NaN

    if(Number.isFinite(numero)){
      validas++
      acumulador += numero

      const etiqueta = numero >= 22 ? 'Caluroso' : 'Fresco'
      console.log(`El numero ${numero} es ${etiqueta}`)
    }else {
      descartadas++
    }
  }
  const media = validas > 0 ? (acumulador/validas).toFixed(1) : 'Sin datos'
  return {
    validas,
    descartadas,
    media
  }
}

export function ejercicio01(): void {
  console.log('--- Caso principal ---')
  console.log(analizarLecturas(lecturas))

  console.log('--- Casos límite ---')
  console.log('Array vacío:', analizarLecturas([]))
  console.log('Solo cero:', analizarLecturas(['0']))
}
