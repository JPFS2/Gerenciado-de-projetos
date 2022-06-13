const objetos = require('./objetos');
const projeto = objetos.projeto;
const equipe = objetos.equipe;
const tarefa = objetos.tarefa;

exports.projeto = (req, res) => {
    const id = req.params.id;

    //proje = projeto.filter(proj => proj.id == id);

    //projeto[id - 1] = ''
    
    res.json(id);
}

exports.equipe = (req, res) => {
    const id = req.params.id;

    const equi = equipe.filter(equip => equip.id != id);
    
    equipe = equi;

    res.json(equipe);
}

exports.tarefa = (req, res) => {
    const id = req.params.id;

    const tar = tarefa.filter(tare => tare.id != id);
    
    tarefa = tar;

    res.json(tarefa);
}