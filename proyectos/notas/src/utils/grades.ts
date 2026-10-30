import type { Student } from "../types/student";

// Crear una funcion obtenga la media de las noats de los estudiantes
/**
 *  Calculo de la media de las notas de todos los alumnos
 * @param Student[] Array de estudiantes
 * @returns Number Average Total
 */
export function gradesMediun(students: Student[]): number {

  return students.length !== 0 ? (students.reduce((acc, student) => acc += student.grade, 0) / students.length) : 0;

}

// Crear una funcion que me diga si el alumno esta aprobado o no

/**
 *  Funcion que devuelve un boolean segun si el alumno esta aprobado o no
 * @param student Estudiante pasado como parametro
 * @returns Boolean Esta Aprobado o no
 */
export function isPassed(student: Student): boolean {

  return student.grade >= 5;

}

/**
 *  Funcion que devuelve un array con todos los alumnos aprobados
 * @param list Array con estudiantes
 */
export function passedStudents(list: Student[]): Student[] {

  return list.filter(isPassed);

}
