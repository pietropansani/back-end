// =====================================
// Server.js + BACK-END COMPLETO
// =====================================

// PARTE 1: IMPORTANDO AS FERRAMENTAS NECESSÁRIAS
const express = require('express'); // biblioteca para criar o servidor
const path = require('path'); // biblioteca para lidar com caminhos de arquivos
const { DatabaseSync } = require('node:sqlite') // biblioteca para lidar com banco de dados SQLite

// PARTE 2: CRIAR O SERVIDOR E ABRIR O BANCO
const app = express(); // cria o servidor
const banco = new DatabaseSync(path.join(__dirname, 'tarefas.db')); // abre o banco de dados SQLite ( se n exister um banco com esse nome, ele será criado ) _dirname = pasta deste arquivo

