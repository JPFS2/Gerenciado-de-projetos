const objetos = require('./objetos');
const projeto = objetos.projeto;
const equipe = objetos.equipe;

exports.projeto = (req, res) => {
    const info = req.body;
    projeto.push(info);
    return res.json(info);
}

exports.equipe = (req, res) => {
    const info = req.body;
    equipe.push(info);
    return res.json(info);
}


