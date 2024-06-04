/*Função que gera um número aleatório, porém preciso gerar números aleatórios de acordo com o solicitado pela
variável quantidadeDeNumerosSorteados, o ideal é que os números não se repitam, e também não devo permitir
que a quantidadeDeNumerosSorteados seja maior que o número máximo
*/

//Função que gera um número aleatório

let textoParagrafo = document.getElementById('texto_resultado');

function sortear() {
    let numeroGerado;
    
    //Pega os valores dos inputs e passa para float
    let qntd = parseFloat(document.getElementById('quantidade').value);
    let min = parseFloat(document.getElementById('de').value);
    let max = parseFloat(document.getElementById('ate').value);

    let sorteados = [];

    //Verifica se os campos estão preenchidos
    if (isNaN(min) || isNaN(max) || isNaN(qntd)){
        alert('Preencha os campos corretamente');
    } else if (min > max) {
        alert('O número mínino deve ser menor que o máximo.');
    } else if (qntd > (max - min)) {
        alert(`A "Quantidade de números" não pode ser maior que a diferença entre o número máximo e o mínimo (${max - min})`)
    } else {
        for (let i = 0; i < qntd; i++) {
            numeroGerado = gerarNumeroAleatorio(min, max);

            while (sorteados.includes(numeroGerado)) {
                numero = gerarNumeroAleatorio(min, max);
            }

            sorteados.push(numeroGerado);
        }
        textoParagrafo.innerHTML = `Os números sorteados foram: ${sorteados}`;
        alterarStatusBotao();
        
        console.log(sorteados);
    }
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    textoParagrafo.innerHTML = 'Números sorteados: nenhum ainda';
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    alterarStatusBotao();
}



