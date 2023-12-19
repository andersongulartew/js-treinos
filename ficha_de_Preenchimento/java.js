function nome() {
    let nome = window.prompt(`Favor digitar seu nome Completo : `)
    
    let nome1 = document.getElementById('nomeCompleto')
    nome1.innerHTML = `<p>Seu nome Completo é: <b>${nome}</b>.</p>` 
}


function media() {
    
    let n1 = Number(window.prompt(`Qaul foi a primeiro nota de ?`))
    let n2 = Number(window.prompt(`alem de ${n1}, qual foi a segunda nota ?`))
    med = (n1 + n2)/2

    let msg
    if(med >=5){
        msg = 'Meus Parabens !!'
    }else{
        msg = 'estude mais !!'
    }
    
    let res = document.getElementById('media')   
    res.innerHTML += `<p>Sua média final é <b>${med}</b>.</p>`
}

function dados() {
    
    let idade = window.prompt(`Qual sua Idade ?`)
 
    let dad = document.getElementById('dados')   
    dad.innerHTML += `<p>Você tem  <b>${idade}</b> anos .</p>`
    dad.innerHTML += `<h2>Parabéns sua inscrição foi concluida com sucesso.</h2>`
}
