var dadosLista = [];
var valorLista = [];
var categoriaLista = [];
var editandoIndex = -1;

function salvarUser(){
    let itemAdd = document.getElementById('itemAdd').value;
    let valorAdd = parseFloat(document.getElementById('valorAdd').value);
    let categoriaAdd = document.getElementById('categoriaAdd').value;

    if(itemAdd != "" && !isNaN(valorAdd) && categoriaAdd != ""){
        if (editandoIndex === -1) {
            dadosLista.push(itemAdd);
            valorLista.push(valorAdd);
            categoriaLista.push(categoriaAdd);
        } else {
            dadosLista[editandoIndex] = itemAdd;
            valorLista[editandoIndex] = valorAdd;
            categoriaLista[editandoIndex] = categoriaAdd;
            editandoIndex = -1;
        }

        crialista();

        document.getElementById('itemAdd').value = "";
        document.getElementById('valorAdd').value = "";
        document.getElementById('categoriaAdd').value = "";
    } else {
        alert("Por favor informe todos os dados corretamente");
    }
}

function crialista(){
    let tabela = "<tr><th>Descição</th><th>Valor</th><th>Categoria</th><th>Ações</th></tr>";
    let total = 0;

    for(let i = 0; i <= (dadosLista.length - 1); i++){
        let valor = parseFloat(valorLista[i]);
        total += valor;

        let estiloValor = valor > 100 ? "style='color:red; font-weight:bold;'" : "";

        tabela += "<tr><td>" + dadosLista[i] + "</td><td " + estiloValor + ">R$ " + valor.toFixed(2) + "</td><td>" + categoriaLista[i] + "</td><td><button class='btn btn-warning' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar Gasto</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
    }

    document.getElementById('tabela').innerHTML = tabela;
    document.getElementById('totalGastos').innerText = total.toFixed(2);
}

function excluir(i){
    dadosLista.splice((i - 1), 1);
    valorLista.splice((i - 1), 1);
    categoriaLista.splice((i - 1), 1);
    crialista();
}

function editar(i){
    let index = i - 1;
    document.getElementById('itemAdd').value = dadosLista[index];
    document.getElementById('valorAdd').value = valorLista[index];
    document.getElementById('categoriaAdd').value = categoriaLista[index];
    editandoIndex = index;
}
