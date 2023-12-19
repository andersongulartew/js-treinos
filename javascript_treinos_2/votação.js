function votar(idade){
    if(idade >18 && idade <=70){
        console.log("seu voto é obrigatorio no Brasil")
    } else if (idade <=17){
        console.log("se voto é facultativo no Brasil")
    }else if(idade<=15){
        console.log( "não votam")
    }
}

votar(55)
