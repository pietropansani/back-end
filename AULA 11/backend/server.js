// =====================================
// Server.js + BACK-END COMPLETO
// =====================================
// ==============================================
// PARTE 1: IMPORTANDO AS FERRAMENTAS NECESSÁRIAS
// ==============================================
const express = require('express'); // biblioteca para criar o servidor
const path = require('path'); // biblioteca para lidar com caminhos de arquivos
const { DatabaseSync } = require('node:sqlite') // biblioteca para lidar com banco de dados SQLite

// ==============================================
// PARTE 2: CRIAR O SERVIDOR E ABRIR O BANCO
// ==============================================
const app = express(); // cria o servidor
const banco = new DatabaseSync(path.join(__dirname, 'tarefas.db')); // abre o banco de dados SQLite ( se n exister um banco com esse nome, ele será criado ) _dirname = pasta deste arquivo
// cria a tabela tarefas caso ela não exista
banco.exec(`
    create table if not exists tarefas (
    id integer primary key autoincrement,
    titulo text not null,
    concluida integer default 0
    )
`);
// ========================================================
// PARTE 3: CONFIGURAR O SERVIDOR (OS FAMOSOS MIDDLEWARES)
// ========================================================
// app.use: "Todo pedido que chegar, passe primeiro por aqui."
app.use(express.json()); // faz o servidor entender JSON (para receber dados do front-end)
app.use(express.static(path.join(__dirname, '..', 'public')));
// entrega a página da pasta "public"

// ========================
// PARTE 4: ROTAS (a API)
// ========================
// ROTA: a combinação do método + endereço
// API: é o conjunto dessas rotas

// Toda rota revebe 2 coisas ( SEMPRE NA ORDEM ABAIXO):
// 1 - Requisição(request): o PEDIDO que chegou.
// 2 - Resposta(response): o que vamos devolver para of front.

// Operacação | Método HTTP | Endereço         | Comando SQL
// --------------------------------------------------
// Create     | POST        | /tarefas         | INSERT
// Read       | GET         | /tarefas         | SELECT
// Update     | PUT         | /tarefas/:id     | UPDATE
// Delete     | DELETE      | /tarefas/:id     | DELETE

// ============================== CRIAR ==============================
// POST /tarefas ---> salvar uma tarefa nova no banco de dados (sqlite)
app.post('/tarefas', (req, res) => {
    const titulo = req.body.titulo; // pega o título da tarefa do corpo da requisição

    // Se o titulo estiver vazio, devolve erro 400 (bad request)
    if (!titulo) {
        return res.status(400).json({ erro: ' O título da tarefa é obrigatório.' });
    }
    // INSERT: adicionar uma linha na tabela. Lembre-se os "?" são trocados pelo valor do título
    banco.prepare('INSERT INTO tarefas (titulo) VALUES (?)').run(titulo);
    res.json({ ok: true }); // responde que deu certo.
});

// PASSO A PASSO do que acontece no CREATE:
// 1) O usuário digita no campo e clica em "adicionar" no nagevador.
// 2) O front-end manda um POST para /tarefas com {"título":"..."}
// 3) Chega aqui no server. O express escolhe esta rota porque o metodo POST e o endereço é /tarefas.
// 4) "req.body.titulo" é o texto que o front mandou, lembrando só funciona por causa do express.json() que está lá em cima!
// 5) Validação: se tiver vazio, respondemos com status 400(= "pedido errado") em um JSON de erro, NUNCA confie no front-end, sempre valide aqui!
// 6) Insert em tarefas
// 7) Resposta

// ================= LER ===================
// GET /tarefas -> devolve todas as tarefas
app.get('/tarefas', (req, res) =>{
    // SELECT: busca todas as linhas da tabela (as mais novas primeiro)
    const tarefas = banco .prepare('SELECT * FROM tarefas ORDER BY id DESC').all();
    res.json(tarefas);
});

// ============== ATUALIZAR ================
// PUT /tarefas/5 --> muda a tarefa de id 5 (marcac como feita ou pendente)
app.put('/tarefas/:id', (req, res) => {
    const id = req.params.id; // O número que veio do endereço (o 5)
    const concluida = req.body.concluida; // 0 ou 1, enviado pela página
    
    // UPDATE: alterar a linha que tem o ID
    banco.prepare('UPDATE tarefas SET concluida - ? WHERE  id = ?').run(concluida, id);
    res.json({ ok: true});
})
