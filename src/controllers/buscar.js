const objetos = require('./objetos');
const projeto = objetos.projeto;
const equipe = objetos.equipe;
const tarefa = objetos.tarefa;

exports.projeto = (req, res) => {
    const id = req.params.id;

    const proje = projeto.find(proj => proj.id == id);

    if(!proje) return res.status(404).json(); //Não foi achado conteúdo (página não encontrada).

    return res.json(proje);
}

exports.equipe = (req, res) => {
    const id = req.params.id;

    const equi = equipe.find(equip => equip.id == id);

    if(!equi) return res.status(404).json();

    return res.json(equi);
}