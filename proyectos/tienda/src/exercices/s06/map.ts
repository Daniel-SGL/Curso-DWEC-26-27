// Enunciado: Descripción del ejercicio
// Autor: Nombre y apellidos
// Investigación: Fuentes consultadas
//

const phones = new Map<string, string>();

phones.set("Ana", '668331604');
phones.set("Pedro", '623671604');
phones.set("Angel", '6128781704');
phones.set("Alvaro", '268201456');
phones.set("Luis", '79442715');

console.log(phones.size) // 4
console.log(phones.get("Pedro")) // 623
console.log(phones.get("Juan")) // <--- undefined (mucho cuidado, hay que comprobar si el dato existe)

// grades de una clase

const grades = new Map<string, number>([
  ["Ana", 9],
  ["Mario", 5],
  ["Andres", 4],
]);

// Funcion para añadir usuarios al map
export function addUser(name: string, note: number): Map<string, number> {

  return (note > 0 && note < 10) ? grades.set(name, note) : grades;

}

// Funcion para obtener la nota de un alumno siempre y cuando existe
export function gradeOf(name: string): string {

  const grade = grades.get(name);
  return grade ? `Nota: ${grade}` : "No tiene nota"

}

console.log("pepe") // No tiene nota
console.log("Ana") // 9

// ---------------- Contabilizar los votos de los alumnos ----------------

export function countVotes(votes: string[]): Map<string, number> {

  const count = new Map<string, number>();

  for (const vote of votes) {
    // Sacar el numero de votos que tiene vote
    const previus = count.get(vote) ?? 0;
    count.set(vote, previus + 1)

  }
  return count
}

// Agrupar alumnos por clase. Tengo una lista de alumnos y cada uno es de un grupo 2DWEC-A o 2DWEC-B
// Construir un namesGroup que devuleva cada grupo con sus alumnos respectivos

interface Student {
  name: string;
  group: string;
}

const students = [
  { name: "Ana", group: "2A" },
  { name: "Pepe", group: "2B" },
  { name: "Pedro", group: "2A" },
  { name: "Alberto", group: "2B" },
]

export function namesGroup(students: Student[]): Map<string, string[]> {
  const groups = new Map<string, string[]>();
  for (const student of students) {
    const current = groups.get(student.group) ?? []
    groups.set(student.group, [...current, student.name]);

  }
  return groups;

}

for (const [group, name] of namesGroup(students)) {

  console.log(`Gruop: ${group} Estudiante: ${name}`)

}

// closures --- DOM

function hello(name: string): string {

  return `Hola ${name}`;

}

const fHello = hello;

console.log(fHello("Ana"));
