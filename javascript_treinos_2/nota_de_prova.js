/*
const prompt = require('prompt-sync')(); 

let n1= prompt ("Informe a primeira nota: ") ;


let n2= prompt ("Informe a segunda nota: ") ;



let media =Number(n1)+Number(n2) /Number(2) ; 

console.log(media)
if ( media >=7 ) {
console.log("Aprovado");

} else  {
    console.log("Reprovado");
}
*/

function nota (nota1,nota2){
if ( (nota1+nota2)/2 >=7 ) {
console.log("Aprovado");

} else  {
    console.log("Reprovado");
}
}
nota(8,4)