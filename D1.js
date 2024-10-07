/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//i principali datatype in JavaScript sono 5: 

//stringa: contengono delle parole o delle frasi. Vengono sempre scritte tra due apici o virgolette;
//numero: questo tipo di datatype contiene dei numeri (interi o decimali). Serve per fare i conti o contare le cose;
//boolean: questo tipo di datatype contiene solo due valori: true (vero) o false (falso). Serve per verificare un valore oppure per dare una risposta secca ad una domanda precisa;
//Undefined: serve per specificare che ad una determinata variabile non è stato dato nessun tipo di valore preciso;
//Null: per indicare un datatype che è stato concepito proprio per non dargli nessun tipo di valore.

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 

let myName = 'Antonio'
console.log ("il mio nome", myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 

let myNumber1 = 12
let myNumber2 = 20
console.log ("la somma è",myNumber1 + myNumber2)
 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 

let x = 12
console.log ('x è uguale a',x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myName: Giannattasio
console.log (myName)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myNumber3 = 4
console.log ("la sottrazione tra i due numeri è",x - myNumber3)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName1 = 'john'
let myName2 = 'John'
console.log ("John e john sono due nomi diversi?", myName1 !== myName2)
