const express = require('express');
const route = express.Router();
const obj = require('./src/controllers/objetos');
const view = require('./src/controllers/buscar');
const create = require('./src/controllers/create');
const up = require('./src/controllers/up');

// Visualizar(buscar) Home
route.get('/', (req, res) => {
    return res.json(obj);
})

// Visualizar(buscar) pelo id
route.get('/projeto/:id', view.projeto);
route.get('/equipe/:id', view.equipe);
route.get('/tarefa/:id', view.tarefa);

// Criando 
route.post('/projeto', create.projeto);
route.post('/equipe', create.equipe);
route.post('/tarefa', create.tarefa);

// Adicionar
route.put('/projeto:id/equipe:eid', up.equipe);



// Excluindo

module.exports = route;