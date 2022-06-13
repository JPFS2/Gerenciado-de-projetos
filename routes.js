const express = require('express');
const route = express.Router();
const obj = require('./src/controllers/objetos');
const view = require('./src/controllers/buscar');
const create = require('./src/controllers/create');
const up = require('./src/controllers/up');
const del = require('./src/controllers/delete');

// Visualizar(buscar) Home
route.get('/', (req, res) => {
    return res.json(obj);
})

// Visualizar(buscar) pelo id
route.get('/projeto/:id', view.projeto);
route.get('/equipe/:id', view.equipe);

// Criando 
route.post('/projeto', create.projeto);
route.post('/equipe', create.equipe);

// Atualizar e Adicionar
route.put('/projeto/:id/nome', up.projeto); 
route.put('/projeto/:id/equipe/:eid', up.equipe);
route.put('/projeto/:id/tarefa', up.tarefa);

// Excluindo
route.delete('/projeto/:id', del.projeto);
route.delete('/equipe/:id', del.equipe);
route.delete('/projeto/:id/tarefa/:tid', del.tarefa);

module.exports = route;