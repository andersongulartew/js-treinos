function media() {

    let nome = window.prompt(`Qual é o nome do aluno ?`)
    let n1 = Number(window.prompt(`Qaul foi a primeiro nota de ${nome}`))
    let n2 = Number(window.prompt(`alem de ${n1}, qual foi a segunda nota de ${nome}`))
    med = (n1 + n2)/2

    let msg
    if(med >=5){
        msg = 'Meus Parabens !!'
    }else{
        msg = 'estude mais !!'
    }
    
    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>` 
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`
}