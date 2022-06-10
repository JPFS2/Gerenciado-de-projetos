const objetos = require('./objetos');
const projeto = objetos.projeto;
const equipe = objetos.equipe;
const tarefa = objetos.tarefa;

exports.equipe = (req, res) => {
    const id = req.params.id;

    const body = req.body;

    let selcEquipe = equipe.forEach(function(el, i){
        if(el.body === body) return equipe[i];
    })

    
    projeto.forEach(function(el, i){
        if(el.id === id){
            projeto[i].push(selcEquipe);
        }
    })
   
    

    return res.json(body);
}

exports.tarefa = (req, res) => {
    const body = req.body;
    tarefa.push(body);
    return res.json(body);
}