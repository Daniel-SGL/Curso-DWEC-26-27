// Enunciado: Ejercicio 2
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//


const notas: number[] = [6, 8, 4, 9, 7]

//
//
// funcion que muestre todas las notas

function showNotes(notes: number[]): void {
  // for (const note of notes) {
  //   console.log(note)
  // }
  console.log([...notes])
}

//
// funcion que calcule la media de las notas

function calculateAverage(notes: number[]) {
  let media: number = 0
  for (const note of notes) {
    media += note
  }
  notas.length != 0 ? media = media / notas.length : 0
  return media
}

//
// funcion que muestra la mayor nota y la posicion de esa nota

function maxNoteAndPosition(notes: number[]) {
  let maxNote: number = 0
  let notePosition: number = 0
  // for (const note of notes) {
  //   if (maxNote < note) {
  //     maxNote = note
  //   }
  // }
  notes.forEach((numero: number, indice: number) => {
    if (numero >> maxNote) {
      maxNote = numero
      notePosition = indice
    }
  })
  console.log(`Nota maxima: ${maxNote} - Posicion: ${notePosition}`)
}

//
// funcion que calcule la Mediana de las notas

function calculateMediam(notes: number[]) {
  const copyNotes = [...notes]
  copyNotes.sort();
  return copyNotes[Number((copyNotes.length / 2).toFixed(0))]
}

//
// funcion que devuelva un array con notas junto con la nota pasada como parametro

const setNote = (notes: number[], note: number): number[] => [...notes, note];

//
// funcion que elimina una nota, recibe el array notas y como segundo parametro 1 o -1, si es 1 elimina la primera posicion del array y devuelve una copia
// Si es -1 elimina la ultima posicion del array devuelve una copia . No mutamos el array del parametro ojo
// Y me lo demostrais haciendo un clg del array del parametro para asegurar que no lo has mutado

function deleteGrade(notes: number[], t: (1 | -1)): void {
  const copyNotes: number[] = [...notes]
  if (t === 1) {
    copyNotes.shift();
  } else if (t === -1) {
    copyNotes.pop();
  }
  console.log(copyNotes)


  console.log(notes)
}

// ------------------------ Funcion de ejecucion ------------------------
export function ejercicio2(): void {
  showNotes(notas)
  console.log(calculateAverage(notas))
  maxNoteAndPosition(notas)
  console.log(calculateMediam(notas))
  console.log(setNote(notas, 10))
  deleteGrade(notas, 1)
}
