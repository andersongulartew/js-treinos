const boletim = [
    {Nome:"anderson",
     idade:89},
    {Nome:"gabriel",
     idade:56},
    {Nome:"mauricio",
     idade:39},
    {Nome:"eduarda",
     idade:15},
    {Nome:"joseval",
     idade:25}
]




    var sum = 0
    for(var i =0;i<boletim.length;i++){ 
        sum+=boletim[i].idade;

}

console.log(sum)