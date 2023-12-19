const boletim = [
    {
        Nome: "anderson",
        n1: 8,
        n2: 8,
        n3: 5,
    },
    {
        Nome: "gabriel",
        n1: 2,
        n2: 1,
        n3: 6,
    },
    {
        Nome: "mauricio",
        n1: 5,
        n2: 9,
        n3: 10,
    },
    {
        Nome: "eduarda",
        n1: 10,
        n2: 9,
        n3: 8,
    },
    {
        Nome: "joseval",
        n1: 4,
        n2: 3,
        n3: 10,
    }
]


for (const aluno of boletim) {
    let soma = 0
    let media = 0

    soma += aluno.n1 + aluno.n2 + aluno.n3 
    media = soma/3  

    if (media >= 7) {
        console.log(aluno.Nome,"aprovado")
    } else {
        console.log(aluno.Nome,"reprovado")
    }
    
}






//let soma_2 = 0
//soma_2 += boletim[0].n1 + boletim[0].n2 + boletim[0].n3
//console.log(soma_2)