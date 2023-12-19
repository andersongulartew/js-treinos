const nomeCompleto = "Anderson Wodnoff";
const nomeBairro = "Cecilia";
const mensagem = `Olá ${nomeCompleto} mora no bairro ${nomeBairro}`;
console.log(mensagem);

const listaNomes = ["Bruno", "Gabriel", "jesse", "david"];
console.log(listaNomes);
console.log(listaNomes[0]);
console.log(listaNomes[1]);
console.log(listaNomes[2]);
console.log(listaNomes[3]);

const listaIdades = [25, 30, 35, 40];
console.log(listaIdades[0]);
console.log(listaIdades[1]);
console.log(listaIdades[2]);
console.log(listaIdades[3]);

const novaMensagem = `${listaNomes[0]} tem ${listaIdades[0]} anos`;
const novaMensagem1 = `${listaNomes[1]} tem ${listaIdades[1]} anos`;
const novaMensagem2 = `${listaNomes[2]} tem ${listaIdades[2]} anos`;
const novaMensagem3 = `${listaNomes[3]} tem ${listaIdades[3]} anos`;
console.log(`${novaMensagem}\n ${novaMensagem1}\n ${novaMensagem2}\n ${novaMensagem3}`);

const idade = 55;
// if= se --- else= se nao
if (idade <= 10) {
    console.log(`criança`);
} else if (idade <= 17) {
    console.log(`adolescente`);
} else if (idade <= 59) {
    console.log(`adulto`);
} else {
    console.log(`idoso`);
};
console.log(idade);


