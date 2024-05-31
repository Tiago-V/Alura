/*Função que gera um número aleatório, porém preciso gerar números aleatórios de acordo com o solicitado pela
variável quantidadeDeNumerosSorteados, o ideal é que os números não se repitam, e também não devo permitir
que a quantidadeDeNumerosSorteados seja maior que o número máximo
*/

let quantidadeDeNumerosSorteados = document.getElementById('quantidade');
let listaDeNumerosSorteados = [];

function sortear() {
    return gerarNumeroAleatorio()
}

//Função que gera um número aleatório
function gerarNumeroAleatorio() {
    let min = parseFloat(document.getElementById('de').value);
    let max = parseFloat(document.getElementById('ate').value);
    let numeroGerado = Math.floor(Math.random() * (max - min + 1) + min);

    console.log(numeroGerado)

}