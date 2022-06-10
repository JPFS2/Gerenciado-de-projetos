const express = require('express');
const route = express.Router();
const create = require('./src/controllers/create');
const obj = require('./src/controllers/objetos');
const add = require('./src/controllers/add');

route.get('/', (req, res) => {
    return res.json(obj);
})


route.post('/projeto', create.projeto);
route.post('/equipe', create.equipe);
route.post('/projeto:id/equipe', add.equipe);

module.exports = route;