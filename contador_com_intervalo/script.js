function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var intervalo = document.getElementById('intervalo')
    
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0 ) {
        window.alert(`[ERROR] Faltam Dados !`)
    } else {
        res.innerHTML = 'contando : '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var int = Number(intervalo.value)
        if(i<f){
            // contagen crescente
            for( var c = i; c<=f; c += int){
                res.innerHTML += ` ${c} \u{1F604}	`

        }
        }else {
            // contagen decresente
            for( var c = i; c>=f; c -= int){
                res.innerHTML += ` ${c} \u{1F604}	`
        }
         
    }
    
}
}