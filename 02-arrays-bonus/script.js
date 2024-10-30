const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.dir(teachers);
// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter(teachers => teachers.length >= 5); //=> è un arrow function e ti permette di creare una funzione senza dichiararla
console.log(longNames);
//Bonus invece di usare filter farlo senza
const longNamesBonus = []; //dichiaro un array vuota che va popolata in seguito
function FunctionLongNamesBonus(){//creo la funzione che andrà a popolare l'array
  teachers.forEach(element => {//qua inizio il mio for each con un call back function, come elemento teachers
    if(element.length >= 5){//qua controllo se l'elemento dell'array iterato è più lungo di 5 char
      longNamesBonus.push(element);//se si lo pusho nell'array creato prima
    }
  });
}
FunctionLongNamesBonus();//chiamo la funzione sopra creata
console.log(longNamesBonus);
// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(5,1); //essendo in reverse non è nell'indice 1 ma bensi 5
