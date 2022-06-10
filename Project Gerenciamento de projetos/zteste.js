let projeto = [
    {id: 1, nome: 'Projeto1'},
    {id: 2, nome: 'Projeto2'},
    {id: 3, nome: 'Projeto3'}
]

let equipe = [
    {id: 1, nome: 'Equipe1', integrantes: 'Thal, Did, Rock, Line, Fimi'},
    {id: 2, nome: 'Equipe2', integrantes: 'Slha, Tute, Lee, Naka, Bola'},
    {id: 3, nome: 'Equipe3', integrantes: 'Nik, Mel, Karl, Titoo, Felix'}
]


    const id = 2;

    const body = 3;

    equipe.forEach(function(a, b){
        if(a.id === body) { 
            let tt = equipe[b];
        }
        projeto.forEach(function(c, d){
            if(c.id === id){
                projeto[d].push(tt);
            }
        })
    })

    console.log(equipe[i]);
    

    /*
    projeto.forEach(function(el, i){
        if(el.id === id){
            projeto[i].push(selcEquipe);
        }
    })

    console.log(projeto);*/