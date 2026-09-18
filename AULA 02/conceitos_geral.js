// INICIO BACK-END - JAVASCRIPT

// VARIÁVEIS
// ANTIGO!, PODE SER REDECLARADO E MUDAR O VALOR.

var nome = "João";
var idade = 25;
var idade = 30; // redeclarando a variável idade, além de não gerar erro
var cidade = "São Paulo";

// Mais moderno, não pode ser redeclarado, mas pode mudar o valor.
let nome = "Julia";
nome = "Maria"; // mudando o valor da variável nome

let nome = "José"; // gerará erro, pois não pode ser redeclarado

// const é fixo
const PI = 3.14; // constante, não pode ser redeclarada nem mudar o valor
// PI = 3.14159; // isso geraria um erro
