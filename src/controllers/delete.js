const objetos = require('./objetos');
let projeto = objetos.projeto;
let equipe = objetos.equipe;

exports.projeto = (req, res) => {
    const id = req.params.id;

    const proje = projeto.find(proj => proj.id == id);

    if(!proje) return res.status(404).json();

    projeto[id - 1] = null;
    
    res.json(projeto);
}

exports.equipe = (req, res) => {
    const id = req.params.id;

    const equip = equipe.find(equi => equi.id == id);

    if(!equip) return res.status(404).json();

    equipe[id - 1] = null;

    res.json(equipe);
}

exports.tarefa = (req, res) => {
    const {id, tid} = req.params;
    
    projeto[id - 1].tarefas.splice(tid - 1, 1);

    res.json(projeto[id - 1]);
}
