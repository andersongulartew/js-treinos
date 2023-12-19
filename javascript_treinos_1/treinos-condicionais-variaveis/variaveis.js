console.log("Meu nome é Nathan"); // Padrão
console.warn("Tenho 30 anos"); // Aviso
console.error("Tenho cabelo castanho"); // Erro

// BÁSICO
var nome = "Nathan";
console.log(nome);

nome = "Anderson";
console.log(nome);

let idade = 30;
console.log(idade);

idade = 31;
console.log(idade);

const genero = "Masculino";
console.log(genero);

// genero = "Feminino"; // Erro!
// console.log(genero); // Erro!

// NOMECLATURA

const idadeDoNathan = 30; // Mais comum
const idade_do_nathan = 31;
const IDADE_DO_NATHAN = 32;

// TIPOS

let variavelMuitoLouca = "Texto normal";
console.log(variavelMuitoLouca);
variavelMuitoLouca = 50;
console.log(variavelMuitoLouca);

// STRING - TEXTO
const textoNormal = "Meu nome é Nathan, tenho 30 anos e moro em Chapecó.";
console.log(textoNormal);

const tamanhoDoTexto = textoNormal.length;
console.log(tamanhoDoTexto);

const textoMaiusculo = textoNormal.toUpperCase("oioioioioi");
console.log(textoMaiusculo);

const textoMinusculo = textoNormal.toLowerCase();
console.log(textoMinusculo);

const possuiPalavra = textoNormal.includes("Nathan");
console.log(possuiPalavra);

console.log(textoNormal.startsWith("Meu"));
console.log(textoNormal.endsWith("."));

// CONCATENAR
nome = "Nathan";
idade = 30;
let cidade = "Chapecó";

const textoConcatenado1 =
    "Meu nome é " +
    nome +
    ", tenho " +
    idade +
    " anos e moro em " +
    cidade +
    ".";
console.log(textoConcatenado1);

const textoConcatenado2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
console.log(textoConcatenado2);

// NUMBER - NÚMERO
idade = 30;
let anoAtual = 2023;
let anoDoNascimento = anoAtual - idade - 1;
console.log(anoDoNascimento);
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(3 ** 3); // 3 * 3 * 3
console.log((1 + 1) * (2 + 2));
console.log((1 + 1) * 2 + 2);

let numero = 0.5;
console.log(numero);
console.log(numero.toFixed());

// CUIDADOS
const cuidado = 3 * 33.3;
console.log(cuidado); // teoricamente = 99.9
const saida = cuidado.toFixed(2);
console.log(saida);

console.log(parseInt(saida));
console.log(parseFloat(saida));
console.log(parseInt("abc")); // NaN - Not a Number

console.log(Math.PI);
console.log(Math.pow(3, 3)); // 3 * 3 * 3 de novo
console.log(Math.random() * 100);

numero = 0.6;
console.log(Math.floor(numero)); // Ignora o que está após o ponto
console.log(Math.round(numero)); // Esse não ignora

// BOOLEAN - BOOLEANO - TRUE OU FALSE
// <, >, <=. >=, ==, ===, !=, !==

idade = 30;
console.log(idade >= 30);

nome = "Nathan";
console.log(nome.toUpperCase() == "NATHAN");

// CUIDADOS
idade = "30";
console.log(idade === 30);

console.log(0.3 * 0.3 === 0.9);

console.log(nome !== "Anderson");

// NULL E UNDEFINED
// null = nulo = proposital estar nulo
// undefined = indefinido = não é proposital

console.log(0 === null);
console.log(0 === undefined);
console.log(null === undefined);

let valorUndefined;
console.log(valorUndefined);

let valorNull = null;
console.log(valorNull);
// console.log(valorNull.toString()); // ERRO

// SYMBOL - SÍMBOLO
// NÃO É O MOMENTO DE APRENDER
