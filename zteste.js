let projeto = [
    {id: 1, nome: 'Projeto1', team: '', tarefas: []},
    {id: 2, nome: 'Projeto2', team: '', tarefas: ''},
    {id: 3, nome: 'Projeto3', team: '', tarefas: ''}
]

let equipe = [
    {id: 1, nome: 'Equipe1', integrantes: 'Thal, Did, Rock, Line, Fimi'},
    {id: 2, nome: 'Equipe2', integrantes: 'Slha, Tute, Lee, Naka, Bola'},
    {id: 3, nome: 'Equipe3', integrantes: 'Nik, Mel, Karl, Titoo, Felix'}
]

let tarefa = [
    {id: 1, nome: 'Tarefa1'},
    {id: 2, nome: 'Tarefa2'},
    {id: 3, nome: 'Tarefa3'},
    {id: 4, nome: 'Tarefa4'},
    {id: 5, nome: 'Tarefa5'},
    {id: 6, nome: 'Tarefa6'},
    {id: 7, nome: 'Tarefa7'}
]

//let idProjeto = 2;
//let idEquipe = 3;
//let idTarefa = 5;

//projeto[idProjeto - 1].team.push('teste');

//console.log(projeto[idProjeto - 1].team = equipe[idEquipe - 1].nome);
//console.log(projeto[idProjeto - 1].tarefas += tarefa[idTarefa - 1].nome);
/*
for(let i = 0; i < tarefa.length; i++){
    projeto[idProjeto - 1].tarefas += tarefa[i].nome + ', ';
}
*/

id = 2;

const proje = projeto.filter(proj => proj.id != id);
    
projeto = proje;

console.log(projeto);




/*
for(let i = 0; i < projeto.length; i++){
    if(idProjeto === projeto[i].id){
        projeto[i].team.push(equipe[idEquipe -1]);
    }
}

console.log(projeto);
*/