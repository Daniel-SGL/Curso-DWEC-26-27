// Enunciado: Deberes - Sesion 03
// Autor: Daniel Serrano Garcia
// Investigación: Fuentes consultadas
//

import { type Priority, type Task } from "../../../types/task";

/**
 *  Funcion que crea una nueva tarea
 * @param list: Task[] Array de Tareas
 * @param title: string Titulo de la tarea
 * @param priority: Priority Prioridad de la tarea
 */
export function createTask(list: Task[], title: string, priority: Priority): Task[] {

  const id = list.reduce((max, t) => max = Math.max(max, t.id), 0) + 1
  return [...list, { id, title, priority, done: false }]

}

/**
 *  Funcion que cambia el estado de una tarea
 * @param list: Task[] Array de Tareas
 * @param id: number id de la Tarea
 */

export const toggleDone = (list: Task[], id: number): Task[] => {

  return list.map(t => t.id === id ? { ...t, done: !t.done } : t)

}

/**
 *  Funcion que cambia el titulo de una tarea
 * @param list: Task[] Array de Tareas
 * @param id: number id de la Tarea
 * @param title: string Titulo de la Tarea
 * @returns Descripción
 */
export function rename(list: Task[], id: number, title: string): Task[] {

  return list.map(t => (t.id === id && title.trim() !== '') ? { ...t, title: title.trim() } : t)

}

/**
 *  Funcion que borra una tarea
 * @param list: Task[] Array de Tareas
 */
export const removeDone = (list: Task[], id: number): Task[] => {

  return list.filter(t => !(t.id === id && t.done))

}

/**
 *  Funcion que modifica una tarea
 * @param list: Task[] Array de Tareas
 * @param id: number id de la Tarea
 * @param changes: Partial<Omit<Task, 'id'>> Tarea con los cambios sin ID
 */
export function editTask(list: Task[], id: number, changes: Partial<Omit<Task, 'id'>>): Task[] {

  return list.map(t => t.id === id ? { ...t, ...changes } : t)

}

const priorityWeight: Record<Priority, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

/**
 *  Funcion que devuelve una lista con los nombres de los titulos no hechos y ordenados de High - Medium - low
 * @param list: Task[] Array de Tareas
 */
export const pendingByPriority = (list: Task[]): string[] => {

  return list.filter(t => !t.done)
    .toSorted((t1, t2) => priorityWeight[t2.priority] - priorityWeight[t1.priority])
    .map(t => t.title)

}
