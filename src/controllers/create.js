const objetos = require('./objetos');
const projeto = objetos.projeto;
const equipe = objetos.equipe;

exports.projeto = (req, res) => {
    const body = req.body;
    projeto.push(body);
    return res.json(body);
}

exports.equipe = (req, res) => {
    const body = req.body;
    equipe.push(body);
    return res.json(body);
}
