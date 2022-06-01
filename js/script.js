//Il programma deve chiedere all'utente il numero di km che vuole percorrere e l'età

//Km da percorrere
const kilometers = prompt('Quanti km devi percorrere? :')

//Età del passeggero
const age = prompt('Quanti anni hai? :')

//Ora che ho le informazioni devo calcolare il prezzo totale del viaggio, secondo delle regole:
// 1- Prezzo del biglietto : 0,21 euro al km.
// 2- Sconto del 20% se minorenni.
// 3- Sconto del 40% se over 65.

//Calcolo il Prezzo del biglietto
const price = parseFloat((kilometers * 0.21)).toFixed(2) ;

//Sconto Minoorenni e Over 65
if(age < 18){

    discount = ((price * 20) / 100);

    pricediscount = (price - discount).toFixed(2);

} else if(age > 65){
    
    discount = ((price * 40) / 100);

    pricediscount = (price - discount).toFixed(2);
}
else{
    pricediscount = price;
}



//Stampo
document.getElementById('result').innerHTML = pricediscount;