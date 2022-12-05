
//1 - Dare la possibilità di scegliere pari o dispari 
let pariDispari = prompt("scegli pari o dispari");
console.log(pariDispari)
//2 - inserire numero da 1 a 5 
let numUtente = parseInt(prompt("inserisci numero da 1 a 5"))
console.log(numUtente)
//3 - Generiamo un numero casuale da 1 a 5 con una funzione
function numeroCasuale(){
    let NumPc = Math.floor(Math.random() * 5)+1;
    return NumPc;
}