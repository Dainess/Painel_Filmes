/* Trailer dinâmico - tenta usar aquele código simples da pasta do spotify pra ver se vc consegue subir um server e servir pro html o dado que vc quer, 
deve dar até pra fazer uma parte de salvar. Adiciona "trailer" na query do youtube pra aumentar as chances de vir certo OK*/ 
//botão para remover filme FAIL - não entendeu a tarefa, era pra ter um botão pra CADA filme
//adicionar imagem e nome OK
//armazenar os filmes em uma lista e percorrer sempre que for inserir ou remover OK
//testa e protege se alguém não tacar uma ibagen na caixa --> aviso de falha pro usuário OK

//tirar os bagulho da Alura OK
//provavelmente a boa é por os filmes em objetos OK
//num quero que ele dê esse fetch cada vez que eu puxo o poster não OK
//botão reset OK
//Editar o nome
//mundo ideal vc vai puxar as ibagens tbm via fetch
//salvar os filmes - HARD

nossoRender = ""
arrayFilmes = []
server = `http://127.0.0.1:3000/`

function adicionarFilme() {
    filme = {
        nome: "",
        poster: "",
        trailer: ""
    }
    filme.poster = document.getElementById("poster").value;
    filme.nome = document.getElementById("nomeFilme").value;
    let avisos = document.getElementById("avisos");
    avisos.innerHTML = "";
    let painel = document.getElementById("listaFilmes");
    
    if (filme.nome === "" || filme.poster == "") {
        avisos.innerHTML += "<p class='avisos'>Algum dos campos não foi preenchido</p>"
    } else if ( ! ((filme.poster.endsWith(".jpg") || filme.poster.endsWith(".png") || filme.poster.endsWith(".gif"))) ) {
        avisos.innerHTML += "<p class='avisos'>Formato de imagem não foi aceito!</p>"
    } 
    else if (!arrayFilmes.some(e => e.nome == filme.nome)) {
        arrayFilmes.push(filme);
        console.log(arrayFilmes)
        renderiza(painel, avisos)
    } 
    else {
        avisos.innerHTML += "<p class='avisos'>Já existe esse filme na lista</p>"
    }

    document.getElementById("poster").value = ""
    document.getElementById("nomeFilme").value = ""
}

function removerFilme(index) {
    let avisos = document.getElementById("avisos");
    avisos.innerHTML = "";
    let painel = document.getElementById("listaFilmes");

    if (arrayFilmes.includes(arrayFilmes[index])) {
        arrayFilmes.splice(index, 1)
        renderiza(painel, avisos)
    } 
    else {
        avisos.innerHTML += "<p class='avisos'>O filme não se encontra na lista</p>"
    }
}

function limparLista() {
    let avisos = document.getElementById("avisos");
    avisos.innerHTML = "";
    let painel = document.getElementById("listaFilmes");
    arrayFilmes.splice(0, arrayFilmes.length)
    renderiza(painel, avisos)
}

function renderiza(painel, avisos) {
    painel.innerHTML = "";
    for (let i = 0; i < arrayFilmes.length; i++) {
        if (arrayFilmes[i].trailer == "") {
            movieTitle = arrayFilmes[i].nome.replaceAll(" ", "+");
            url = `${server}${movieTitle}`

            fetch(url)
                .then((response) => response.json())
                .then((json) => {console.log(json); postData(json)}) 

            function postData(value) {
                arrayFilmes[i].trailer = value.link
                console.log(value.poster)
                console.log(value)
                painel.innerHTML += `<div class="posters"><a href=${arrayFilmes[i].trailer} target="_blank"><img src="${arrayFilmes[i].poster}">
                </a><h2> | ${arrayFilmes[i].nome} | </h2><div class="form-wrapper"><button onClick="removerFilme(${i})">Remover Filme</button></div></div>`;
            }
        } else {
            painel.innerHTML += `<div class="posters"><a href=${arrayFilmes[i].trailer} target="_blank"><img src="${arrayFilmes[i].poster}">
            </a><h2> | ${arrayFilmes[i].nome} | </h2><div class="form-wrapper"><button onClick="removerFilme(${i})">Remover Filme</button></div></div>`;
        }        
    }
    avisos.innerHTML = "";
}

document.addEventListener("keyup", (event) => {
    const keyName = event.key;
    if (keyName == "1") {
        console.log(arrayFilmes);
    }
})