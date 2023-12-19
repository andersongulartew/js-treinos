const prompt = require('prompt-sync')();

let mes = prompt("Qual mes do seu aniversario : ");
let dia = prompt("Qual dia do seu aniversario: ");

let mes1 = Number(mes)
let dia1 = Number(dia)

switch (mes1) {
    case 1:
        if (dia1 < 21) {
            console.log("capriconio");
        } else {
            console.log("Aquario");
        }
        break;

    case 2:
        if (dia1 <= 18) {
            console.log("aquario");
        } else {
            console.log("peixes");
        }
        break;
    case 3:
        if (dia1 <= 20) {
            console.log("peixes");
        } else {
            console.log("aries");
        }
        break;
    case 4:
        if (dia1 <= 20) {
            console.log("aries");
        } else {
            console.log("touro");
        }
        break;
    case 5:
        if (dia1 <= 20) {
            console.log("touro");
        } else {
            console.log("gemeos");
        }
        break;
    case 6:
        if (dia1 <= 20) {
            console.log("gemeos");
        } else {
            console.log("cancer");
        }
        break;
    case 7:
        if (dia1 <= 22) {
            console.log("cancer");
        } else {
            console.log("leao");
        }
        break;
    case 8:
        if (dia1 <= 22) {
            console.log("leao");
        } else {
            console.log("virgem");
        }
        break;
    case 9:
        if (dia1 <= 22) {
            console.log("virgem");
        } else {
            console.log("escorpiao");
        }
        break;
    case 10:
        if (dia1 <= 22) {
            console.log("libra");
        } else {
            console.log("escorpiao");
        }
        break;
    case 11:
        if (dia1 <= 21) {
            console.log("escorpiao");
        } else {
            console.log("sagitario");
        }
        break;
    case 12:
        if (dia1 <= 21) {
            console.log("sagitario");
        } else {
            console.log("capricornio");
        }
        break;



    default:
        console.log("data invalida")
        break;
}






/*if(qualSigno == "janeiro","fevereiro"  ){
    console.log("Aquario")

}else if(qualSigno == "marco","abril"){
    console.log("Aries")
}else if(qualSigno == "maio","junho"){
    console.log("Gemeos")
}else if(qualSigno == "julho","Agosto"){
    console.log("Leão")
}else if(qualSigno == "Setembro","Outubro"){
    console.log("Libra")
}else if(qualSigno == "Novembro","Dezembro"){
    console.log("Sagitario")
} */