const objetos = require('./objetos');
const projeto = objetos.projeto;
const equipe = objetos.equipe;
const tarefa = objetos.tarefa;

exports.equipe = (req, res) => {
    const {id, eid} = req.params;

    const proje = projeto.find(proj => proj.id == id);
    
    if(!proje) return res.status(404).json();
    
    projeto[id - 1].team = equipe[eid - 1].nome

    return res.json(proje);
}

