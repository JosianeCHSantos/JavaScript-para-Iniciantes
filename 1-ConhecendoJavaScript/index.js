/* 1 - o código é um conjunto/manipulação de variáveis fazendo algumas atribuições entre si e rederinzando algo, 
declarando por exemplo: var nome, var idade, var local...*/

var sobrenome; // Variável do tipo String
var idade;           // Variável do tipo Number
var maiorDeIdade;   // Variável do tipo Boolean
var peso;           // Variável do tipo Number
var fichaDeAdmição; // Variável do tipo Object
var fichaDeColaboradores; //Variável do tipo Array
var idadeDosColaboradores; //Variável do tipo Array
var listaDeSetorEFunção; //Variável do tipo Array

//console.log("Nome do usuário: ", nome);

/* 2 - para passar valor às variáveis, uma observação, deve ser entre "  ", finalizando com ; */

const nome = 'Josiane';
sobrenome = 'Santos';
idade = 38;
//idade = 15;
maiorDeIdade = true;
//maiorDeIdade = false;
peso = 69.500;

fichaDeAdmição = { //entre {} estará as propriedades do objeto
    nome,
    sobrenome,
    idade,
    maiorDeIdade,
    peso,
    CorDaPele: 'branca', //declarando o valor diretamente dentro do objeto, usa-se : e não =
}

fichaDeColaboradores = [ //declaração de Arrays fica entre []
    "Josiane", "Janaina", "Gabriele", "Cláudio", "Camila"

]

idadeDosColaboradores = [
    38, 40, 25, 65, 30
]

listaDeSetorEFunção = [
    {
        Setor: "Desenvolvimento",
        Cargo: "DevOps Junior"
    }, {
        Setor: "Recursos Humanos",
        Cargo:"Recrutamento e Seleção"
    }, {
        Setor: "Desenvolvimento",
        Cargo: "Full-Stack-Developer"
    }, {    
        Setor: "Infraestrutura",
        Cargo: "Consultant Cloud"
    }, {    
        Setor: "Consultant",
        Cargo: "Full-Stack"
    }
]

//nome = "Cristina"

/* 3 - para conferir se o código está rodando e tranzendo resultado, usando console.log() que é uma função do próprio
sistema do Node, que ele vai imprimir no terminal assim que rodar esse arquivo o resultado que foi pedido. 
Observação, string é uma frase*/

console.log('Nome do Usuário: ', nome);
console.log('Sobrenome do Usuário: ', sobrenome);
console.log('Idade do Usuário: ', idade);
console.log('O Usuário é Maior de Idade? ', maiorDeIdade);
console.log('Qual Peso do Usuário? ', peso);
console.log('***************************************************');
console.log('Ficha de Admição:');
console.log(fichaDeAdmição);
console.log('***************************************************');
console.log('Ficha de Colaboradores');
console.log(fichaDeColaboradores);
console.log('***************************************************');
console.log('Idade dos Colaboradores:');
console.log(idadeDosColaboradores);
console.log('***************************************************');
console.log('Lista de Setores e Funções:');
console.log(listaDeSetorEFunção);


/* 4 - Tipos de variáveis: 
 - Nulo (exite uma variável, mas o valor não foi definido -tipo undefined- 
exemplo no item 1), 
 - Numérico (tipo Number - exemplo no item 1 - existem para representar um valor numérico e 
também realizar operações matemáticas), 
 - Boolean (verdadeiro ou falso), 
 - Objetos (faz referência às informações solicitadas)
 - Array (é uma lista de váriaveis)*/

/* 5 - É possível redefinir o valor de alguma variável, por exemplo do nome (nome = "Cristina")*/

/* 6 - Para impossibilitar a alteração de alguma informação, no lugar de var é usado const , assim que criada 
é necessário apresentar o valor, por exemplo: const nome = "Josiane";*/