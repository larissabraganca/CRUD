idLinha = null

function addTabela() {
    isValid = document.form[0].checkValidity();
    if(false === isValid){
        return true;
    }

    // tabela
    let tabela = document.getElementById('table');

    // dados  digitados
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let tel = document.getElementById('telefone').value;
    let profi = document.getElementById('profissao').value;
    
    // checar se o id tem valor, se tiver valor = alteracao, senao inclusao
    if (idLinha == null) {
        let insertTabela = tabela.rows.length;
        let row = tabela.insertRow(insertTabela);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);

        row.id = insertTabela;

        let botao = "<button class='remover' onclick='removeToTable(this)'>remover</button>";

        cell1.innerHTML = '<a id="myLink"'+insertTabela+' href="#" onclick="retrieve(this)">'+insertTabela+'</a>';
        cell2.innerHTML = nome;
        cell3.innerHTML = email;
        cell4.innerHTML = tel;
        cell5.innerHTML = profi;
        cell6.innerHTML = botao;
    } else {
        Array.from(tabela.rows).forEach(element => {
            if (element.id == idLinha) {
                element.cells[1].innerHTML = nome;
                element.cells[2].innerHTML = email;
                element.cells[3].innerHTML = tel;
                element.cells[4].innerHTML = profi;
            }
        });
    }

    idLinha = null;

    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('profissao').value = "";

    return false;
}

function removeToTable(id) {
    let row = id.parentNode.parentNode.id;
    row= document.getElementById(row);
    row.parentNode.removeChild(row);

    return false;
}
// CRUD ( create, retriev, update, delete )
function retrieve(id) {
    let row = id.parentNode.parentNode;
    idLinha = row.id

    document.getElementById('nome').value = row.cells[1].innerHTML;
    document.getElementById('email').value = row.cells[2].innerHTML;
    document.getElementById('telefone').value = row.cells[3].innerHTML;
    document.getElementById('profissao').value = row.cells[4].innerHTML;

    return false;
}