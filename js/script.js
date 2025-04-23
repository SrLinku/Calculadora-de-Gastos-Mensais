//cria variavel do tipo array
var dadosLista = [];
var valorLista = [];
var categoriaLista = [];
function salvarUser(){
    let itemAdd = document.getElementById('itemAdd').value;
    let valorAdd = document.getElementById('valorAdd').value;
    let categoriaAdd = document.getElementById('categoriaAdd').value;

    if(itemAdd != "" && valorAdd != "" && categoriaAdd != ""){
        dadosLista.push(itemAdd);
        valorLista.push(valorAdd);
        categoriaLista.push(categoriaAdd);
        crialista();
        document.getElementById('itemAdd').value = "";
        document.getElementById('valorAdd').value = "";
        document.getElementById('categoriaAdd').value = "";
    }else{
        alert("Por favor informe o nome do cadastro")
    }
}

// Função para preencher a lista de cadastro
function crialista(){
    let tabela = "<tr><th>Descição</th><th>Valor</th><th>Categoria</th><th>Ações</th></tr>";
    for(let i = 0; i<= (dadosLista.length -1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + valorLista[i] + "</td><td>" + categoriaLista[i] + "</td><td><button class='btn btn-warning' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar Gasto</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

// Função para excluir nome da lista
function excluir(i){
    dadosLista.splice((i-1), 1);
    document.getElementById('tabela').deleteRow(i);
}

function editar(i){
    document.getElementById('valorAdd').value = valorLista[(i - 1)];
    valorLista.splice(valorLista[(i - 1)], 1);
}