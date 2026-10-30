import { students } from "./services/students";
import { gradesMediun, isPassed } from "./utils/grades";



// const averageText = document.getElementById("average");
const averageText = document.querySelector("#average"); // <--- Busca
const listU = document.querySelector("#student-list");

if (!(averageText instanceof HTMLParagraphElement)) { // <--- Comprueba

  throw new Error("Falta el parrafo con id average");

}
if (!(listU instanceof HTMLUListElement)) { // <--- Comprueba

  throw new Error("Falta la lista con id student-list");

}

averageText.textContent = `Media: ${gradesMediun(students).toFixed(2)}`; // <--- Modifica

for (const student of students) {

  const item = document.createElement("li");
  item.textContent = `Estudiante: ${student.name} ---- Nota: ${student.grade}`;
  item.style.color = isPassed(student) ? "green" : "red";
  listU.appendChild(item);

}

// Crear un input que busque un alumno y me de su nota

const input = document.createElement("input");
const br = document.createElement("br");
input.style.backgroundColor = "gray";
input.type = "text";
input.style.color = "white";
averageText.appendChild(br);
averageText.appendChild(input);

// <--- Boton de enviar la busqueda --->

const btnSearch = document.createElement("button")

btnSearch.textContent = "Buscar"

averageText.appendChild(btnSearch);
