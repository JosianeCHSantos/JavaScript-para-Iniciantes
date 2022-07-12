// 1 - Operações Matemáticas

var resultado;
var x = 30;
var y = 5;

//Soma
resultado = x + y;
console.log("Soma: ", resultado)
// console.log("Soma: ", x+=y)          Segunda possibilidade de efetuar o cálculo

//Subtração
resultado = x - y;
console.log("Subtração: ", resultado)
//console.log("Soma: ", x-=y)          Segunda possibilidade de efetuar o cálculo

//Divisão
resultado = x / y;
console.log("Divisão: ", resultado)
//console.log("Soma: ", x/=y)          Segunda possibilidade de efetuar o cálculo

//Multiplicação
resultado = x * y;
console.log("Multiplicação: ", resultado)
// console.log("Soma: ", x*=y)          Segunda possibilidade de efetuar o cálculo

// 2 - Cálculo Avançado - Calculando Imc
var peso = 70;
var altura = 1.65;
var imc = (peso / (altura * altura));
console.log("Imc: ", imc)

// 3 - Cálculo do Módulo, é usado % (resto da divisão)
resultado = x % y;
console.log("Módulo: ", resultado)

// 4 - Soma de Strings
var primeiroNome = "Josiane"
var segundoNome = "Santos"
console.log("Nome completo: ", primeiroNome + " " + segundoNome)