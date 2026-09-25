// Estrutura Condicionais (Tomando Decisões)
// As estruturas condiocinais permitem executar diferentes bocos de códig dependendo de uma condição.

// if/Else - Condicionais
// if - Verifica se uma condição é verdadeira e executa o código dentro dele, se a condição for falsa, o ELSE pode executar outro bloco de código.

let idade = 67

if (idade >= 18) {
    console.log("Você é maior de idade!")
}   else {
    console.log("Você é menor de idade!");
}

// IF, ELSE IF, ELSE (Multíplas Condições)
let idade2 = 17;

if (idade2 < 12){
    console.log("Você é uma criança!")
}   else if (idade2 < 18) {
    console.log("Você é um adolescente!")
}   else {
    console.log("Você é um adulto!")
}


