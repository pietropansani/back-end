// FUNÇÕES EM JAVASCRIPT

// O que é uma função?
// Uma função é um bloco de código reutilizável, criado para executar uma tarefa específica.

// Analogia SIMPLES!
// Você vai colocar valores (parâmetros)
// Ela processa
// Devolve um resultado (return)

// -------------------------------------
// Estrutura básica de uma função
// -------------------------------------

function nomeDaFuncao(parametro1, parametro2){
    // Código que sera executado
    return resultado;
}

// Function ---> Palavra-Chave
// nomeDaFuncao ---> Nome da Função
// Parâmetros ---> valores que a função recebe
// Return ---> Valor que a função devolve

// -------------------------------------
// 5 EXEMPLOS
// -------------------------------------
// 1 - Somar dois números
// -------------------------------------

function multipilicar(a, b) {
    return a * b;
}
console.log(multipilicar(2,15))

// -------------------------------------
// 2 - Converter real para dólar
// -------------------------------------

function realParaDolar(valorReal, cotacao){
    return valorReal  / cotacao;
}

console.log(realParaDolar(10,5.20).toFixed(2))

// -------------------------------------
// 2 - Converter real para dólar
// -------------------------------------

function dolarParaReal(valorDolar, cotacao){
    return valorDolar * cotacao
}

console.log(dolarParaReal(20, 5.20))

// -----------------------------------------------------
// 4 - Aumento de salário (Você merece 25% de aumento)
// -----------------------------------------------------

function aumentoSalarial(salario, aumento){
    return salario * aumento;
}

function aumentoSalarial2(salario, aumento){
    // Correção: soma o salario com o valor do aumento gerado pela primeira função
    return salario + aumentoSalarial(salario, aumento);
}

// Armazenando os valores em variáveis para facilitar o uso e formatação
let valorPromocao = aumentoSalarial(1692, 0.25);
let novoSalario = aumentoSalarial2(1692, 0.25);

// Exibindo no console com a formatação .toFixed(2)
console.log("O valor da sua promoção de acordo com seu salário é: " + valorPromocao.toFixed(2) + ".");
console.log("O valor que você ira receber a partir de agora é de: " + novoSalario.toFixed(2) + ".");

// -------------------------------------
// Verificar se é par ou impar
// -------------------------------------

function verificarParOuImpar(numero){
    if (numero % 2 === 0) {
        return "O número é PAR.";
    } else {
        return "O número é IMPAR.";
    }
}

console.log(verificarParOuImpar(8));  
console.log(verificarParOuImpar(15)); 

// Outro Jeito de Fazer

function parOuimpar(numero){
    return numero % 2 === 0 ?"PAR!" :"IMPAR!";
    // Se o resto for 0 --> retorna "par"
    // Caso contrário ---> retorna "impar"
}
console.log(parOuimpar(7))