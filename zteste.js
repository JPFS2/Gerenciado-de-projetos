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


const id = 2;
const body = 3;
let selectEquipe;
let selectProjeto;


equipe.forEach(function(a, b){
    if(a.id === body) { 
        selectEquipe = b;
    }
})

projeto.forEach(function(c, d){
    if(c.id === id){
        selectProjeto = d;
    }
})



console.log(selectEquipe, projeto);