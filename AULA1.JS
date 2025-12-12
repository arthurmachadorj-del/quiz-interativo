
//Variveis: Let, var e const

//let nome = "Arthur";
//const idade = 47;
//let temcarro = true;
//let a = 10, b=5;
//let = soma = a+b;

//console.log("Meu nome é:",nome, "\nTenho ", idade)
//console.log("A soma de ", a," + ",b, "\nResultado igual á ", soma)

/*let idade = 10;
    if (idade >=18){
        console.log("Você é maior de idade")
        } else {
            console.log("Menor de idade")
        }
*/

/*let dia = 5
console.log("Digite um valor entre 1 e 7")
//dia = prompt("Digite dia da semana");



switch (dia){
    case 1:
        console.log("Dominigo");
        break
    case 2:
        console.log("Segunda");
            break
    case 3:
        console.log("Terça");
            break
    case 4:
        console.log("Quarta");
            break
    case 5:
        console.log("Quinta");
            break
    case 6:
        onsole.log("Sexta");
            break
    case 7:
        console.log("Sábado");
        break

    default:
        console.log("Dia Invalido");
        break
}*/

//Loop for while

/*for(let i=5; i>= 0 ; i--){
    console.log(i)
}
let j = 0;
while (j<=5){
    console.log(j);
   j++;
}*/

/*function somar(a,b){
    console.log(a+b)
}
somar(3,5)*/

/*function somar(a,b){
    return a+b
}
const soma1 = somar(3,5);
console.log(soma1)*/

/*function validaridade(idade){

        if (idade >= 18){
            console.log("Maior")
        } else{
            console.log ("Menor")
        }

}
let pessoa1 = validaridade(10)*/


/*function validaridade (idade){
    if(idade>=18){
        return "Maior"
    } else {
        return "Menor"
    }
}
let pessoa1 = validaridade(19)
console.log(pessoa1)*/


// Excecicio 1
/*function saudarUsuario(nome){
        console.log("Olá,", nome, "! Seja bem-vindo(a) ao nosso aplicativo.");

}
let nome = saudarUsuario("Arthur")*/

/*function somar(a,b){
    return a+b
}
const soma1 = somar(3,5);
console.log(soma1)*/


// toFixed fixa as casas depois da virgula
/* function calcularimc (altura,peso,nome){
       return peso / (altura * altura)
       
}
let imc = calcularimc(1.70,115,);
let nome = "Arthur"
console.log("Olá,",nome,"seu IMC ", imc.toFixed(2));

// segunda forma
function calculaimc2(nome,peso,altura){
    imc = peso / (altura*altura)
    console.log(nome," Seu IMC: ", imc.toFixed(2) );
}
calculaimc2("Arthur",115,1.7); */

// $ pode chamar a variavel sem precisar fechar a string usando " ", mas para isso precisamos usar o ``

/*function verficaparouimpar(numero){

    if(numero % 2 === 0){
        return "Par"
    } else {
        return "Impar"
    }
}
    console.log(`10 é : ${verficaparouimpar(10)}`)*/

    /*function aplicarDesconto(valorTotal,porcentagemDesconto){

        let valor = valorTotal * (1 - porcentagemDesconto);
        return valor;
    }

    let valor = 150; 
    let desconto = 0.10;

    let resultado = aplicarDesconto(valor,desconto);
    console.log ("Valor a pagar: ",resultado);*/

    /*function tabuada(numero){
        console.log(`-------------Tabuada do numero ${numero}`)
        for (let i=1;i<=10;i++){
            const resultado = numero * i;
            console.log(`${numero} x ${i} = ${resultado}`)
        }
    }
    tabuada(7);
    tabuada(5);*/


   /*const frutas = ['Maça','Pera','Uva','Limao']
    
   for(let i = 0; i<frutas.length;i++)
   console.log (frutas[i])*/



   /*function converterMoeda (valor,taxa){
        let valortotal = valor * taxa
        return valortotal

   }
   let v = 50
   let t = 5.20
   m = "R$"
   let resultado = converterMoeda(v,t)
   console.log (m,resultado)*/

 /*  function calcularMedia(notas) {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    let media = soma / notas.length;
    return media;
}

// Teste com o array solicitado
let notasAluno = [7.5, 8.0, 6.0, 9.0];

let resultado = calcularMedia(notasAluno);

console.log("Média do aluno:", resultado);*/

/*function temperaturasSemanais (temperatura){
    for (let i=0; i < temperatura.length; i++){
        const t = temperatura[i];
        console.log (`Dia ${i + 1} Temperatura ${t}` )
    }

}

let temp = [23,25,28,31,29,32,32]

temperaturasSemanais(temp)*/

/*const frutas = [['Maça',2],['Pera',5],['Uva',4],['Limao',3]]
for (let i=0; i<frutas.length;i++){
    console.log(`${frutas[i][0]} ----- ${frutas[i][1]} Unidades`)

}*/

/*let minhasTarefas = [
    'Estudar JavaScript',
    'Lavar a louça',
    'Ir ao mercado',
    'Fazer exercícios',
    'Ler um livro'
];*/

// Remover a primeira tarefa (concluída)
//console.log ("Tarefa Concluida: ", minhasTarefas.shift() );  // ou splice(0, 1)

// Remover a última tarefa (concluída)
//console.log ("Tarefa Concluida: ", minhasTarefas.pop());    // ou splice(minhasTarefas.length - 1, 1)

//console.log("Tarefas restantes:", minhasTarefas)

/*let listaCompras = ["Leite", "Pão", "Ovos" , "Cafe", "Bolo"]
console.log (listaCompras)
console.log (listaCompras[1])
console.log (listaCompras.length)*/

/*let livros = ['Cientas','Matematica','Informatica','Geografia','Portugues']
livros.push ('Historia')
livros.splice(1,1)
let livroProcurado = "Informatica";
console.log ("Índice do Livro", livroProcurado, "=", livros.indexOf(livroProcurado));
console.log(livros)*/

/*let votos = [1, 2, 1, 3, 2, 1, 1, 4];

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let candidato4 = 0;


// Loop para percorrer o array e contar votos
for (let i = 0; i < votos.length; i++) {
    if (votos[i] === 1) {
        candidato1++;
    } 
    else if (votos[i] === 2) {
        candidato2++;
    }
    else if (votos[i] === 3) {
        candidato3++;
    }
    else if (votos[i] === 4) {
        candidato4++;
    }
    
}
console.log("Total de votos do candidato 1:", candidato1);
console.log("Total de votos do candidato 2:", candidato2);
console.log("Total de votos do candidato 3:", candidato1);
console.log("Total de votos do candidato 4:", candidato2);*/

/*let numeros = [1,2,3,4,5,6,7,8,9,10]

let numerospares = []

numeros.forEach(function(numeros){
    if (numeros % 2 === 0 ){
        numerospares.push(numeros)
    }
})
console.log(numerospares)*/

const produtos = [
    {id: 1, nome: "Notebook", Categoria: "Eletronicos", preco: 2500},
    {id: 2, nome: "Mouser Gamer", Categoria: "Eletronicos", preco: 150},
    {id: 3, nome: "Camisa Polo", Categoria: "Vestuario", preco: 75},
    {id: 4, nome: "Cala Jeans", Categoria: "Vestuario", preco: 120},
    {id: 5, nome: "Monitor", Categoria: "Eletronicos", preco: 550}]

   // console.log (`O produto é ${produtos[4].nome} e custa ${produtos[4].preco}`)

   //const produtocategoria = produtos.filter(item =>item.Categoria === "Eletronicos")
   //const produtocategoria = produtos.filter(item =>item.preco > 500)
   //console.log (produtocategoria)

   /*function somapreco(){
    let soma = 0
    for (let i = 0; i < produtos.length;i++) {
        soma = soma + produtos[i].preco
    }
        return(soma)
   }
   
   console.log (`O Total em estoque é de R$ ${somapreco().toFixed(2)}`)*/

   /*const produtoComDesconto = produtos.map(produto => {
        const precoComDesconto = produto.preco * 0.9
        console.log(precoComDesconto)
   })
   */
   /*const produtoComDesconto = produtos.map(produto =>({
    ...produto,
      precoComDesconto: (produto.preco * 0.9).toFixed(2)
    
}))
    console.log('Array com Desconto')
    console.log(produtoComDesconto)

*/
/*let filaAtendimento = ["Arthur", "Maria", "João", "Fernanda", "Carlos"];
let filaInvertida = [];   // Novo array

for (let i = filaAtendimento.length - 1; i >= 0; i--) {
    filaInvertida.push(filaAtendimento[i]);
}

console.log(filaInvertida);*/

/*let medicoes = [15.3, 18.1, 12.0, 20.5, 17.8];
let maiorValor = medicoes[0]; // começa com o primeiro valor do array
for (let i = 1; i < medicoes.length; i++) {
    if (medicoes[i] > maiorValor) {
        maiorValor = medicoes[i];
    }
}
console.log("A maior medição é:", maiorValor);*/

let pontuacoes = [10, 5, 20, 8, 15];
let somaTotal = 0;
for (let i = 0; i < pontuacoes.length; i++) {
    somaTotal = somaTotal + pontuacoes[i];
}
console.log("A soma total das pontuações é:", somaTotal);




 



   
 


