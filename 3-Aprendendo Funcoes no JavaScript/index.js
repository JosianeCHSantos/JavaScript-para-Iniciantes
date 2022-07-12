// como declarar uma função - function - é uma função que vai receber paramêtros, processar esses parâmetros
// por meio de uma lógica e retornar um valor. Dessa forma é criado um bloco de códigos reutilzável.
// 1 - Cálculo Avançado - Calculando Imc (exemplo da aula anterior)

// 1º opção:
function calcuarImc(peso, altura){          //recebe dois parâmetros = peso e altura
    var imc = (peso / (altura * altura))
    return imc
}   

var pessoa1 = {
    peso: 90,
    altura: 1.80
}

var pessoa2 = {
    peso: 50,
    altura: 1.55
}

var imcPessoa1 = calcuarImc (pessoa1.peso, pessoa1.altura)
var imcPessoa2 = calcuarImc (pessoa2.peso, pessoa2.altura)

console.log("Imc 1: ", imcPessoa1)
console.log("Imc 2: ", imcPessoa2)

// 2º opção
/*function calcuarImc(peso, altura){          //recebe dois parâmetros = peso e altura
    return (peso / (altura * altura))
}   


var pessoa1 = {
    peso: 90,
    altura: 1.80
}

var pessoa2 = {
    peso: 50,
    altura: 1.55
}

var imcPessoa1 = calcuarImc (pessoa1.peso, pessoa1.altura)
var imcPessoa2 = calcuarImc (pessoa2.peso, pessoa2.altura)

console.log("Imc 1: ", imcPessoa1)
console.log("Imc 2: ", imcPessoa2)*/



// o que é e como declarar uma arrow function
calcularMedia = (n1, n2) => {
    var media = (n1 + n2) / 2
    return media
}

var x = 20;
var y = 10;
var resultado = calcularMedia (x,y)

console.log(`Media dos numeros: ${x} e ${y} = ${resultado}`)