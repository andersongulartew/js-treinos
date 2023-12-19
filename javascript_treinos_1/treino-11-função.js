/* 
idade = 9

if(idade <=10){
    console.log ("Você é uma criança")
} else if(idade <=14){
    console.log ("Você é um Adolescente")
}else if(idade<=17){
    console.log("Você E um jovem")
}else if(idade>17){
    console.log ("vocé e um adulto")
}

console.log(idade)*/


var n = parImp(10)
function parImp(n){
if(n % 2 == 0){
    return 'par'
}else {
    return 'impar'
}
}
console.log(n)



var s = soma(5,4)
function soma(n1=0,n2=0){
    return n1+n2
}
console.log(s)


var dados = [{nome:"anderson",idade:"30", sexo: "masculino"},{nome:"jesse",idade:"25", sexo: "masculino"},{nome:"david",idade:"40", sexo: "masculino"}]

console.log(dados[0])
console.log(dados[1])
console.log(dados[2])


const a = `${dados[0]} e ${dados[1]} e ${dados[2]}`
console.log(dados[0],dados[1])

