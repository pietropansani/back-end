// ===========================================
// API DE CACHORROS
// ===========================================

// Endereço API que vamos utilizar
const url = "https://dog.ceo/api/breeds/image/random";

// Pegando os elementos do HTML

// Imagem - pelo seu id
const fotoCachorro = document.getElementById('fotoCachorro');

// Botão pelo seu id
const btnNovaFoto = document.getElementById('btnNovaFoto');

// ===========================================
// FUNÇÃO PARA BUSCAR UMA NOVA FOTO
// ===========================================

async function buscarFoto() {
    // Fazer uma requisição para a API
    const resposta = await fetch(url);
    // converter a resposta da API para JSON
    const dados = await resposta.json();
    // Mostrar no console o que a API retornou
    console.log(dados)
    // alterar-mos o endereço da imagem no HTML
    fotoCachorro.src = dados.message;
}

// ===========================================
// BOTÃO
// ===========================================
// Quando o usuário clicar no botão
// vamos executar a função buscarFoto()
btnNovaFoto.addEventListener('click', buscarFoto);

// quando a página abrir,
// Já buscamos uma foto automaticamente
window.addEventListener('load', buscarFoto);