// ---------------------------------
// SELECIONANDO ELEMENTOS DO DOM
// ---------------------------------

// SELECIONANDO POR ID
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imageteste");

// SELECIONANDO POR CAIXA
let caixas = document.getElementsByClassName("box");

// MOSTRAR NO CONSOLE.LOG
console.log(titulo);
console.log(caixas);
console.log(imagem);

// ----------------------------------
// FUNÇÃO PARA ALTERAR O CONTEUDO
// ----------------------------------

function alterar(){
    titulo.innerHTML = "Jarvis dominou o cerebro do Nicolas!"
    subtitulo.innerText = "Apenas Fatos!"
    paragrafo.innerText = "O texto do paragrafo foi modificado pelo JavaScript"

    // ALTERANDO ELEMENTO DA CLASSE
    caixas[0].innerText = "Primeiro parágrafo alterado"
    caixas[1].innerText = "Segundo parágrafo alterado"

    // ALTERANDO A IMAGEM
    imagem.src = "https://i.pinimg.com/736x/5c/44/4e/5c444e1c3c633561d1448ba58c421fc2.jpg" // cole aqui o endereço direto da imagem
}

