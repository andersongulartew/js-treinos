const nome = "Anderson Wodnoff"

const listaNomes = ["anderson", "Jesse", "David", "Cris"];
console.log(listaNomes);
console.log(listaNomes[0]);
console.log(listaNomes[1]);
console.log(listaNomes[2]);
console.log(listaNomes[3]);

const novaInformacao = `Tenho 4 irmaos, que se chama ${listaNomes[0]} e ${listaNomes[1]} e ${listaNomes[2]} e ${listaNomes[3]}`
console.log(novaInformacao);

const listaIdades = [30, 25, 35, 23];
console.log(listaIdades[0]);
console.log(listaIdades[1]);
console.log(listaIdades[2]);
console.log(listaIdades[3]);

const novaIdade = `${listaNomes[0]} tem ${listaIdades[0]} anos`;
const novaIdade1 = `${listaNomes[1]} tem ${listaIdades[1]} anos`;
const novaIdade2 = `${listaNomes[2]} tem ${listaIdades[2]} anos`;
const novaIdade3 = `${listaNomes[3]} tem ${listaIdades[3]} anos`;

console.log(`${novaIdade}\n ${novaIdade1}\n ${novaIdade2}\n ${novaIdade3}`)

const idade = 19;

if (idade<=12){console.log(`Criança`)}
else if (idade<=18){console.log(`Criança`)}
else if(idade<=45){console.log(`Adulto`)}
else if(idade>=45){console.log(`Idoso`)}


console.log(idade)