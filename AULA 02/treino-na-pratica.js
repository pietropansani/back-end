var cor = "azul";
var cor = "vermelho";
console.log(cor); // Saída: vermelho

let fruta = "manga";
fruta = "morango ao leite";
console.log(fruta); // Saída: morango ao leite  

let fruta2 = "banana";
let fruta3 = "abacaxi";
console.log(fruta2, fruta3); // Saída: banana abacaxi

const pi = 3.14;
pi = 3.14159; // Isso causará um erro, pois não podemos reatribuir uma constante
console.log(pi); // Saída: 3.14

// FORMAS DE DECLARAR UM CÓDIGO EM JAVASCRIPT
// 1. Declaração de função (Function Declaration)
function saudacao() {
    console.log("Olá!");
}
saudacao(); // Saída: Olá!

// CAMEL CASE --- * A mais Famosa
// - Primeira palavra minúscula
// - Palavras seguintes começam com maiúscula
// let nomeCompleto; let idadeUsuario; let enderecoResidencial; functionCalcularIdade(){};

// -----------------------------------------------------
// PASCALCASE --- * Muito usada em linguagens de programação orientadas a objetos
// - Todas as palavras começam com maiúscula

// class UsuarioSistema {
//    constructor(nome, idade) {
//        this.nome = nome;
//        this.idade = idade;
//    }
// };

// -----------------------------------------------------
// SNAKE CASE
// - Todas as palavras são minúsculas e separadas por underline
// let nome_completo; let idade_usuario; let endereco_residencial; function_calcular_idade(){};