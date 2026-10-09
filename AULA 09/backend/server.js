// ===================================================
// NOSSA API DE CACHORROS
// ===================================================

// Agora as fotos NÃO são mais baixadas automaticamente!
// Elas devem existir manualmente na pasta
// data/fotos
// ===================================================

// NOTAS
// GET /api/cachorros/aleatorio
// GET /api/cachorros/raca/:raca

// IMPORTAR o framework express para criar o servidor
const express = require("express");
// Importar o CORS para permitir requisições de outros domínios (ex: frontend)
const cors = require("cors");
// Importa o módulo de arquivos do NODE
const fs = require("fs");
// Importa utilidade para trabalhar com caminhos de arquivos
const path = require("path");
// Importa o arquivo JSON que contém as raças e fotos
const cachorros = require("./data/dogs.json");
// Cria a aplicação Express
const app = express();
// Definir a porta onde o servidor irá rodar
const PORT = 3000;
// Habilitar o uso do CORS na aplicação
app.use(cors());

// ===========================================
// SERVIR ARQUIVOS ESTÁTICOS
// ===========================================

// Nós falamos para o express
// "Tudo o que estiver na pasta data/fotos pode ser acessado pela URL /fotos"
// Exemplo:
// http://localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos") // caminho real da pasta do servidor
    )
);

// ======================================
// FUNÇÃO AUXILIAR
// ======================================

// Função que recebe um array e retorna um item aleatório dele
function sortear(array) {
    // Math.random() sorteia um número decimal entre 0 e 1
    // Math.random() * array.length multiplica pelo número de itens
    // Math.floor() tira a parte decimal, arredondando para baixo
    const i = Math.floor(Math.random() * array.length);
    // Retorna o item sorteado
    return array[i];
}

// ================================
// ROTAS DA API
// ================================

// ROTA 1 - Cachorro Aleatório
app.get("/api/cachorros/aleatorio", (req, res) => {
    // req - request (requisição) = pedido que chega ao servidor
    // res - response (resposta) = o que o servidor envia de volta

    // pegar todas as fotos de todas as raças
    // Object.values pega os valores do objeto
    // flat transforma tudo em um único array
    const todasAsFotos = Object.values(cachorros).flat();

    // sorteia uma foto aleatória
    const item = sortear(todasAsFotos);

    // responder para o cliente em formato JSON
    res.json({
        // status da resposta
        status: "ok",
        foto: item,
        // URL da foto, que é a URL do servidor + o caminho da foto
        url: `http://localhost:${PORT}/fotos/${item}`
    });
});

// ROTA 2 - Cachorro por Raça
// Exemplo de URL: http://localhost:3000/api/cachorros/raca/husky

app.get("/api/cachorros/raca/:raca", (req, res) => {
    // pegar a raça da URL
    const raca = req.params.raca.toLowerCase();

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
        url: `http://localhost:${PORT}/fotos/${item}`
    });
});

// ======================================
// INICIAR O SERVIDOR
// ======================================

// Inicia o servidor express
app.listen(PORT, () => {
    console.log(`🌎 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📂 Coloque as fotos manualmente na pasta data/fotos, e atualize o arquivo data/dogs.json com os nomes das raças e fotos.`);
});