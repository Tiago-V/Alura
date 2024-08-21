//Essa primeira parte não foi solicitada no exercício, mas fiz para que eu mesmo pudesse alterar a quantia livremente.
let pista = 100;
let superior = 200;
let inferior = 400;

let qtdPista = document.getElementById("qtd-pista");
qtdPista.innerHTML = `<span id="qtd-pista">${pista}</span>`

let qtdSuperior = document.getElementById("qtd-superior");
qtdSuperior.innerHTML = `<span id="qtd-superior">${superior}</span>`

let qtdInferior = document.getElementById("qtd-inferior");
qtdInferior.innerHTML = `<span id="qtd-inferior">${inferior}</span>`

//Função do botão comprar
function comprar(){
    let ingresso = document.getElementById("tipo-ingresso").value;
    let qtd = document.getElementById("qtd").value;

    //O mesmo explicado abaixo serve para os demais tipos de ingresso.
    //Quando o valor recuperado do ingresso for pista, ele irá verificar se a quantia de ingressos é maior que a disponível.
    if (qtd < 0) {
        alert("Insira um número positivo em QTDE.")
    } else {
        if (ingresso == "pista") {
            //Se sim, faz a subtração e altera o HTML
            if (qtd <= pista) {
                pista = pista - qtd;
                qtdPista.innerHTML = `<span id="qtd-pista">${pista}</span>`
            //Se não, informa o usuário da falta de ingressos para este tipo
            } else {
                alert("Quantidade indisponível para pista");
            }
    
        } else if (ingresso == "superior") {
            if (qtd <= superior) {
                superior = superior - qtd;
                qtdSuperior.innerHTML = `<span id="qtd-superior">${superior}</span>`
            } else {
                alert("Quantidade indisponível para a cadeira superior");
            }
            
        } else if (ingresso == "inferior") {
            if (qtd <= inferior) {
                inferior = inferior - qtd;
                qtdInferior.innerHTML = `<span id="qtd-inferior">${inferior}</span>`
            } else {
                alert("Quantidade indisponível para a cadeira inferior");
            }
        }
    }
}

//Ao termino da aula vi a resolução do professor, percebi que existem formas diversas de fazer a mesma coisa.
//No caso do professor, ele separou cada ingresso em uma função diferente.