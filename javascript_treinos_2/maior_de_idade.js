const prompt = require('prompt-sync')();


let pergunta = prompt("qual sua idade :")

idade=Number(pergunta)

if( idade >=0 && idade <=17){
    console.log("voce é menor de idade")
}else if(idade >0 && idade <=50){
    console.log("voce é adulto")
}else if(idade >=51){
    console.log("voce é idoso")
}else{
    console.log("idade invalida")
}
