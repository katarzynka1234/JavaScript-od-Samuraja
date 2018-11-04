// *** ARRAY *** - metody //

const italianUser = ["Giovanni", "Michaele", "Angelo", "Luigi", "Valentina", "Marco"];

console.log(italianUser);

// PUSH(); - dodaje nowy element tablicy na końcu array
italianUser.push("Noe");
console.log(italianUser);

// UNSHIFT(); - dodaje nowy element na początku array

// POP(); - usuwa ostatni element array i go ZWRACA

// SHIFT(); - usuwa pierwszy element array i go ZWRACA

// CONCAT(); -  łączy tablice  
/* 
const newArrayConcated = italianUser.concat(nazwaTablicy lub "nowy element tablicy");
const newArrayWithES6 = [...italianUser, ...nazwaTablicy, "nowy element tablicy"];
*/

// SLICE(); - zwraca nową tablicę 
/*
.slice(2, 5);
2 - index od którego chcemy tworzyć nową tablicę (z tym indeksem), 
5 - do tego indeksu (bez tego indeksu) 

.slice(-3);
-3 - trzy elementy od końca
*/


// SPLICE(); - metoda zmienia tablice na której jest użyta i zwraca elemnty które są usunięte w formie tablicy!!.
/*
.splice(1, 2); 
1 - od tego indeksu usuwa elementy (z tym indeksem)
2 - ile elemetów ma usunąć

.splice(0); - usuwa wszystkie elementy tablicy ( alternatywa to .lenght = 0);

.splice(3, 1, "nowy element"); - zastąpienie usuniętego elementu
3 - od którego indeksu będziemy usuwać
1 - ile elemntów będzie usuniętych
"nowy element" - wskakuje na miejsce usuniętego elementu

.splice(2, 0 "nowy element1"); 
.splice(0, 0, "nElem1", "nElem2", "nElem3"); - dodanie elemtów od wskazanego indeksu (nowe elemety są umieszczne przed wskazanym indeksem!)
 */

// SORT(); - sortuje alfabetyczenie od A-z

// INDEXOF();
/*
.indexOf(elemnt); - wyszukuje od początku tablicy dany element i przy pierwszym zgodnym elem zwraca jego indeks (gdy nie ma szukanego elem to zwraca -1)
.lastIndexOf(element); -  wyszukuje od końca tablicy i zwraca ideks
 */

// INCLUDES(); - wyszukuje czy tablica zawiera dany elemet (również typ) i zwraca true / false
/* 
.includes("szukany elem");
 */

// JOIN(); - tworzy string z elem oddzielonych przecinkiem domyślnie
/*
.join("znak który oddziela elem") - spacja, przecinek, średnik itp.
 */

// REVERSE(); - odwraca elem tablicy i zmienia tablice na której pracujemy;

// SPLIT(); - tworzy ze stringa tablice
/*
.split("") - rozdziela każda litere
.split(" ") - spacja wydziela element
.split(",", 3) - przecinek wydziela elem i tworzy trzy elem w tablicy
.split(", ") - przecinek i spacja wydziela elem

*/