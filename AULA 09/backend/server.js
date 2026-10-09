// ===================================================
// NOSSA API DE CACHORROS
// ===================================================

// Agora as fotos NÂO são mais baixados automaticamente!
// Eles devem existir manualmente na pasta
// Data / Fotos
// ===================================================

// NOTAS
// get /api/cachorros / aleatório
// get /api/cachorros / raça
// IMPORTAR o framwork express para criar o servidor

const express = require("express");
// Importar o CORS para permitir requisições de outros dominios (ex: frontend)
const cors = require("cors");
// Importa o módulo de arquivos do NODE
const fs = require("fs");
// Importa utilidade para trabalhar com caminhos de arquivos
const path = require("path");
// Importa o arquivo JSON que contém as raças e fotos
const cachorros = require("./data/dogs.json")
// Cria a aplicação Express
const app = express();
// Definir a porta onde o servidor irá rodar
const PORT = 3000;
// Habilitar o uso do CORS na aplicação
app.use(cars());

// ===========================================
// SERVIR ARQUIVOS ESTÁTICOS
// ===========================================

// Nós falamos para o express
// "Tudo o que estiver na pasta data/fotos pode ser acessado pela URL /fotos"
// Exemplo:
// https://localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos") // caminho real da pasta do servidor
    )
)

// ======================================
// FUNÇÃO AUXILIAR
// ======================================

// Função que recebe um array e retorna um item aleatório dele
function sortear(array) {
    // Gera um número aleatório entre 0 e o tamanho do array
    // Array.length - conta quantos itens existem na lista
    // math.random() - Sorteia um número decimal entre 0 e 1
    // math.random() * array.length - Multiplica o número sorteado pela quantidade de itens.
    // math.floor() - tira a parte decimal, arredondando para baixo.
    const i = Math.floor(Math.random() * array.length)
    // const i = guarda a posição na variavel i
    return array[i];
    // Retorna o item sorteado
}

// ================================
// ROTAS DA API
// ================================

// ROTA 1 - Cachorro Aleatório
app.get("/api/cachorros/aleatorio", (req, res) => {
    // req - request(requisição) = é o pedido que chega ao servidor, por exemplo,o navegador pede uma foto de cachorro.
    // res - response(resposta) = é o que o servidor envia de volta, por exemplo, o endereço da foto do cachorro.

    // pegar todas as fotos de raças
    // object.values pega os valores do objeto
    // flat transforma tudo em um único array
    const todasAsFotos = Object.values(cachorros).flat();
})

// sorteia uma foto aleatória
const item = sortear(todasAsFotos)

// responder para o cliente em formato JSON
res.json({
    // status da resposta
    status: "ok",
    foto: item,
    // URL da foto, que é a URL do servidor + o caminho da foto
    url: `https://localhost:${PORT}/fotos/${item}`
});

// ROTA 2 - Cachorro por Raça
// Exemoplo de URL: https://localhost:3000/api/cachorros/raça/husky

app.get("/api/cachorros/raça/:raca", (req, res) => {
    // req - request(requisição) = é o pedido que chega ao servidor
    // res - response(resposta) = é o que o servidor envia de volta

    // pegar a raça da URL
    const raca = req.params.raca.toLocaleLowerCase();

    // verificar se a raça existe
    if (!cachorros[raca]) {
        return res.status(404).json({
            status: "error",
            message: "Raça não encontrada"
        });
    }

    // sortear uma foto aleatória da raça
    const item = sortear(cachorros[raca]);

    // responder para o cliente em formato JSON
    res.json({
        status: "ok",
        foto: item,
        url: `https://localhost:${PORT}/fotos/${item}`
    });
});