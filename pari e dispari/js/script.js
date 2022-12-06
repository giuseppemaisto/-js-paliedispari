
//1 - Dare la possibilità di scegliere pari o dispari 
let pariDispari = prompt("scegli pari o dispari");
console.log(pariDispari)
//2 - inserire numero da 1 a 5 
let numUtente = parseInt(prompt("inserisci numero da 1 a 5"))
console.log("il tuo numero è "+numUtente)
//3 - Generiamo un numero casuale da 1 a 5 con una funzione
function numeroCasuale(min, max){
   
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numPc = numeroCasuale(1,5);
console.log("il numero del pc è " + numPc);
//4 - sommiamo i due numeri 
// 4.1 - definiamo variabile somma 
let somma = numUtente + numPc;
console.log("la somma è "+ somma);
//5 - stabiliamo e la somma è pari o dispari tramite una funzione
   // 5.1 - Se il risultato dell'operatore resto di somma da 0 allora è apri 
   // ALTRIMENTI è dispari 


   function SommaPariDispari(somma){
    
    if(somma % 2 == 0){
      return  "pari";
    }
    
        return "dispari";
    
 
   }
   let esito = SommaPariDispari(somma);
   

   //6 - stampa risultato 
// 6.1 - Se utente ha scelto pari e la somma è pari allora ha vinto 
 //ALTRIMENTI ha vinto il computer 
 if(pariDispari == esito){
    console.log("hai vinto");
 }else {
    console.log("hai perso");
 }
