/*

***** VARIAVEIS DE TEXTOS

const nomeCompleto = "anderson gularte wodnoff"

const numeroTexto = nomeCompleto.length
console.log(numeroTexto)

const tudoMaiusculo = nomeCompleto.toUpperCase() // TUDO EM MAIUSCULO
console.log(tudoMaiusculo)

const tudoMinusculo = nomeCompleto.toLowerCase() // tudo em minusculo
console.log(tudoMinusculo)

//const possuiPalavra = nomeCompleto.includes("anderson");
//console.log(possuiPalavra);


console.log(nomeCompleto.startsWith("anderson")) // confirma a primeira palavra do texto, se for a mesma mostra TRUE

console.log(nomeCompleto.endsWith("wodnoff")) // confirma a ultima palavra do texto, se for a mesma mostra TRUE
*/


/*
 ****** CONCATENAR E JUNTAR

const nome = "anderson"

const idade = 30

const profissao = "Assistente de Pessoal"

const endereço = " viamão/RS"
const endereço1 = "Tapir Rocha, 1820 CONDOMINIO PORTO ITAPUA"

const pais = "Brasil"

const Informação = "o aluno  " + nome + " tem " + idade + " anos e atualmente tem o cargo de " + profissao + " onde mora em " + endereço + " no endereço " + endereço1 + " situado no pais " + pais + " ."
console.log(Informação)

const Informação2 = `o aluno ${nome} tem ${idade} anos e atualmente tem o cargo de ${profissao} onde mora em ${endereço} no endereço ${endereço1} situado no pais ${pais}.`
console.log(Informação2)

*/


var carros = ["palio", "fox", "onix","civic","opala" ]

carros[3]="Hb20" // troca posição por outro item
carros.push("corsa") // acrescenta um item a lista
carros.sort()

var carrosInformação = `a lista tem ${carros.length} posições`
var carrosInformação2 = `o primeiro item é o ${carros[0]}.`

console.log(carros)

console.log(carrosInformação)

console.log(carrosInformação2)

//console.log(carros[0])
//console.log(carros[1])
//console.log(carros[2])
//console.log(carros[3])
//console.log(carros[4])
//console.log(carros[5])

for (var pos = 0; pos < carros.length; pos++) {
   console.log(`a posição ${pos} tem o carro ${carros[pos]}`)
    
}

for(var pos in carros ){
    console.log(`a posição ${pos} tem o carro ${carros[pos]}`)
}

var posição = carros.indexOf("fiat")
console.log(posição)

if(posição == null){
    console.log ("valor nao foi encontrado")
} else{
    console.log  ("o valor esta na posição "+ posição)
}