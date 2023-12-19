const prompt = require('prompt-sync')(); 

let primeiroInt= prompt ("Digite um numero: ") ;


let segundoInt= prompt ("Digite outro numero: ") ;

let numero1=Number(primeiroInt)
let numero2=Number(segundoInt)

let par = 0
let impar = 0

for (let index = numero1; index <= numero2; index++) {
    if(index%2==0){
        par = par + 1
        // ou par ++
    } else{
        impar = impar +1
        // ou impar ++
    }
    
}
console.log("existem "+par+" numeros pares e "+impar+" numeros impares entre "+numero1+" e "+numero2)

