let projeto = [
    {id: 1, nome: 'Projeto1', team: '', tarefas: ''},
    {id: 2, nome: 'Projeto2', team: '', tarefas: ''},
    {id: 3, nome: 'Projeto3', team: '', tarefas: ''}
]

let equipe = [
    {id: 1, nome: 'Equipe1', integrantes: 'Thal, Did, Rock, Line, Fimi'},
    {id: 2, nome: 'Equipe2', integrantes: 'Slha, Tute, Lee, Naka, Bola'},
    {id: 3, nome: 'Equipe3', integrantes: 'Nik, Mel, Karl, Titoo, Felix'}
]

let idProjeto = 2;
let idEquipe = 3;

//projeto[idProjeto - 1].team.push('teste');
console.log(projeto[idProjeto - 1]);


/*
for(let i = 0; i < projeto.length; i++){
    if(idProjeto === projeto[i].id){
        projeto[i].team.push(equipe[idEquipe -1]);
    }
}

console.log(projeto);
*/