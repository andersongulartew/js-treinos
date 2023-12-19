let minhaIdade = 20;

if (minhaIdade >= 30) {
    var teste = 123; // Globalmente exposto
    console.log("Tenho mais que 30 anos");
}

console.log(teste);

// IF, ELSE IF E ELSE

let classificacaoEtaria = null;
if (minhaIdade >= 60) classificacaoEtaria = "Idoso";
else if (minhaIdade >= 18) classificacaoEtaria = "Adulto";
else if (minhaIdade >= 13) classificacaoEtaria = "Adolescente";
else if (minhaIdade >= 5) classificacaoEtaria = "Criança";
else classificacaoEtaria = "Infanto";

console.log(classificacaoEtaria);

// TERNÁRIO
// pergunta ? sim : não

minhaIdade >= 60 ? console.log("Sou idoso") : console.log("Não sou idoso");

// OUTRAS FORMAS DE ENCONTRAR BOOLEANOS
// ! = fazer uma negação - "não tem valor?"
// !! = fazer uma pergunta se há valor - "há valor?"
let meuNome = "Nathan";
if (!!meuNome) console.log("Possui valor");
else console.log("Não possui valor");

console.log(!meuNome);
console.log(!!meuNome);

console.log(typeof meuNome);
console.log(typeof meuNome === "string");

// ESSES TODOS SÃO FALSO
null ? console.log("SIM") : console.log("NÃO");
undefined ? console.log("SIM") : console.log("NÃO");
"" ? console.log("SIM") : console.log("NÃO");
0 ? console.log("SIM") : console.log("NÃO");
false ? console.log("SIM") : console.log("NÃO");

// ?
let teste1;
console.log(teste1?.toString());

// CONDICIONAL SEQUENCIAL
// && - and - e
// || - or - ou
let estado = "RS";
let cidade = "Porto Alegre";

if (estado === "SC") {
    if (cidade === "Chapecó") {
        console.log("Sou de Chapecó");
    }
}

if (estado === "SC" && cidade === "Chapecó") console.log("Sou de SC E Chapecó");
if (estado === "SC" || cidade === "Chapecó")
    console.log("Sou de SC OU Chapecó");

if (
    (estado === "SC" && cidade === "Chapecó") ||
    (estado === "RS" && cidade === "Porto Alegre")
)
    console.log("Sou verdade");

const moraEmSCChapeco = estado === "SC" && cidade === "Chapecó";
const moraEmRSPortoAlegre = estado === "RS" && cidade === "Porto Alegre";
if (moraEmRSPortoAlegre || moraEmSCChapeco) console.log("Mora");

console.log(moraEmSCChapeco);
console.log(moraEmRSPortoAlegre);
