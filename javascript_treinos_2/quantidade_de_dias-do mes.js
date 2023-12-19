function quantidadedeDias(mes) {
    if(mes == 1 || mes== 3 || mes== 5 ||mes == 7|| mes ==8|| mes ==10 || mes==12){
        console.log("31")
    }else if(mes ==2){
        console.log("28")
    }else if(mes ==4 || mes== 6 || mes==9 ||mes == 11){
        console.log("30")
    }
    
}

quantidadedeDias(12)