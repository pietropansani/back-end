// Tipos de Dados em JavaScript
// No javascript, tudo o que armazenamos em uma variável é considerado um tipo de dado. Existem dois tipos de dados: primitivos e não primitivos (ou referenciados).
// 
// Tipos de dados primitivos:
// - String (texto)
// - Number (número)
// - Boolean (verdadeiro ou falso)
// - Undefined (indefinido)
// - Null (nulo)
// - Symbol (símbolo)
// - BigInt (número grande)
// - Object (objeto, que é um tipo de dado não primitivo, que agrupam informações)
// - Array (vetor, que é um tipo de dado não primitivo, que agrupam informações)

// String (texto)
// Uma string é uma sequência de caracteres, que pode ser delimitada por aspas simples, aspas duplas ou crases.
let nome = "Pietro";
let texto = "Olá, mundo!";
console.log(nome); // Saída: Pietro
console.log(texto); // Saída: Olá, mundo!

let saudacao = "Olá, " + nome + "!"; // Concatenando strings
console.log(saudacao); // Saída: Olá, Pietro!

// TYPEOF
// O operador typeof é usado para verificar o tipo de dado de uma variável.

console.log(typeof nome); // Saída: string
console.log(typeof texto); // Saída: string
console.log(typeof saudacao); // Saída: string

let soma = 10 + 5; // Soma de números
console.log(soma); // Saída: 15

console.log(typeof soma); // Saída: number