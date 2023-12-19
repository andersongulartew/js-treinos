
const tabela =[
    {
        codigo: 1,
        especificacao: "cachorro-quente",
        preco: 4,
    },
    {
        codigo: 2,
        especificacao: "x-salada",
        preco: 4.5,
    },
    {
        codigo: 3,
        especificacao: "x-tudo",
        preco: 7,
    },
]


function tabelaTotal(codigo, quantidade) {
    for (const produto of tabela) {
        if (produto.codigo === codigo) {
           return quantidade * produto.preco
        } 
    }
    return "nao existe"
    
}

        
        
console.log(tabelaTotal(3, 2))       
  
        
        
      
	
