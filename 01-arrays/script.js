const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers.splice(3,1); // non ho capito bene la domanda
console.log(fourthTeacher);
// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4,1,"Patrick"); //Ho cambiato il quinto (4) insegnante con patrick
console.dir(teachers);
// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop(); // qui ho eliminato dall'array l'ultimo teacher e l'ho salvato nella costante
console.log(lastTeacher);
// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher);
// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio");
console.log(isFabioPresent); // se esce true vuol dire che fabio ci sta nell'array
// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");
console.log(lewisIndex);
// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.slice(); // ho copiato l'array teachers nella nuova array, clonandola 
console.log(teachersString);
// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = !teachers.length;