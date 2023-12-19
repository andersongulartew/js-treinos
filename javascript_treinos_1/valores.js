const produtos = [
    {produto: "produtoA", preco: 50},
    {produto: "produtoB", preco: 200},
]

function aVista(valor) {
    const resultado = valor * 0.1
    return valor - resultado    
}

function pixDinheiro(valor) {
    const resultado = valor * 0.15
    return valor - resultado
}

function parcelado(valor) {
    const resultado = valor * 0.1
    return valor + resultado
}





console.log(parcelado(produtos[0].preco))