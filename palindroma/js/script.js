// 1 - Permettere di inserire una parola 
let parola_utente = prompt("inserisci parola")
console.log(parola_utente)

//2 - Creare una funzione che stampi se la parola è palindroma o meno 
function palindroma(parola){
// 2.1 - usare la funzione split per generare un array partendo dalla parola inserita 7
let parolaArray = parola.split('');
console.log(parolaArray)
//2.2 - usare la funzione reverse per invertire l'ordine degli elementi 
let parolaReverse = parolaArray.reverse();
console.log(parolaReverse);

//2.3 - usare la funzione join per roportare l'arrey generato ad una stringa 
let parolaStringa = parolaReverse.join('');
console.log(parolaStringa)


//3 - confrontare la stringa inserita con quella generata
//3.1 - SE la stringa genrata è uguale alla stringa innserita allora è palindroma
//- ALTRIMENTI non è palindroma
if(parola_utente == parolaStringa){
    console.log("la parola è palindroma")
}
else{
    console.log("la parola non è palindroma")
}

}


palindroma(parola_utente);
