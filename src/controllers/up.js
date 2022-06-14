const objetos = require('./objetos');
const projeto = objetos.projeto;
const equipe = objetos.equipe;


exports.projeto = (req, res) => {
    const id = req.params.id;

    const proje = projeto.find(proj => proj.id == id);

    if(!proje) return res.status(404).json();

    const {name} = req.body; 
    
    projeto[id - 1].nome = name;

    return res.json(projeto[id - 1]);
}

exports.equipe = (req, res) => {
    const {id, eid} = req.params;

    const proje = projeto.find(proj => proj.id == id);
    
    if(!proje) return res.status(404).json();
    
    projeto[id - 1].team = equipe[eid - 1].nome

    return res.json(projeto[id - 1]);
}

exports.tarefa = (req, res) => {
    const id = req.params.id;

    const proje = projeto.find(proj => proj.id == id);
    
    if(!proje) return res.status(404).json();

    const tarefa = req.body;
    
    projeto[id - 1].tarefas.push(tarefa);

    return res.json(projeto[id - 1]);
}

