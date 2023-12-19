const prompt = require('prompt-sync')(); 


let num1 = prompt("digite um numero :")
let num2 = prompt("digite outro numero :")

num1=Number(num1)
num2=Number(num2)

if(num1>num2){
    console.log(`o numero ${num1} é maior que ${num2}`)
  
}else if(num2>num1){
    console.log(`o numero ${num2} é maior que ${num1}`)

}else{
    console.log(`são iguais`)
}