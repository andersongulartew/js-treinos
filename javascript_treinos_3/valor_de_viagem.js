let cidade1 = "Porto Alegre"
let cidade2= "Florianópolis"

let etanol = 2.22
let gasolina = 5.82
let tipoCombustivel = "gasolina"
let gastoKm = 10
let distanciaKm = 463


var litrosGastos = (distanciaKm*2 /gastoKm)
console.log(litrosGastos)

var precoGasolina = (litrosGastos*gasolina)
var precoEtanol = (litrosGastos*etanol)



if(tipoCombustivel =="gasolina"){
    console.log(precoGasolina)
} else {
    console.log(precoEtanol)
}


