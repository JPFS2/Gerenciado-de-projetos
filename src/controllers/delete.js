const objetos = require('./objetos');
let projeto = objetos.projeto;
let equipe = objetos.equipe;

exports.projeto = (req, res) => {
    const id = req.params.id;

    //projeto = projeto.filter(proj => proj.id != id);

    projeto[id - 1] = null;
    
    res.json(projeto);
}

exports.equipe = (req, res) => {
    const id = req.params.id;

    equipe[id - 1] = null;

    res.json(equipe);
}

exports.tarefa = (req, res) => {
    const {id, tid} = req.params.id;

    
    projeto[id - 1].tarefas.splice(tid - 1, 1);

    res.json(projeto[id - 1].tarefas);
}