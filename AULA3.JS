const carrinho = [
    { nome: 'Camiseta', preco: 49.90, quantidade: 2 },
    { nome: 'Calça Jeans', preco: 129.90, quantidade: 1 },
    { nome: 'Tênis', preco: 199.90, quantidade: 1 },
    { nome: 'Meia', preco: 19.90, quantidade: 3 }
    ];


function AumentaValor10(carrinho){
    let aumenta = []
    for (let i = 0; i < carrinho.length;i++){
        
        let novopreco = carrinho[i].preco * 1.10
     
        aumenta.push({
        nome: carrinho[i].nome,
        preco: novopreco.toFixed(2),
        quantidade: carrinho[i].quantidade
    })}
     return aumenta
}
const novo = AumentaValor10(carrinho)
console.log(`Nome: ${novo[0].nome}`,`Preço com aumento 10% = ${novo[0].preco}`)

/*function filtraValores(carrinho){
    let filtra = []
    for (let i = 0; i < carrinho.length;i++){
        if (carrinho[i].preco > 100){
            filtra.push({
                nome: carrinho[i].nome,
                preco: carrinho[i].preco.toFixed(2)
            });
        }
     }
     return filtra
}

console.log(filtraValores(carrinho))*/



/*function calculaTotalCarrinho(carrinho){
    let calcula  = 0;
    
    for (let i = 0; i < carrinho.length;i++){
        calcula += carrinho[i].preco * carrinho[i].quantidade;

    }
    return calcula

}
console.log(calculaTotalCarrinho(carrinho).toFixed(2));*/
