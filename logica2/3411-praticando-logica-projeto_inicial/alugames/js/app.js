let jogosAlugados = 0;

function quantiaDeJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`)
}

function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`)
    let imagem = jogoClicado.querySelector('.dashboard__item__img')
    let botao = jogoClicado.querySelector('.dashboard__item__button')
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name')

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if(confirm('Tem certeza que quer devolver o jogo?')){
            imagem.classList.remove('dashboard__item__img--rented')
            botao.textContent = 'Alugar'
            botao.classList.remove('dashboard__item__button--return')
            jogosAlugados--;
        }
    } else{
        imagem.classList.add('dashboard__item__img--rented')
        botao.textContent = 'Devolver'
        botao.classList.add('dashboard__item__button--return')
        jogosAlugados++;
    }

    quantiaDeJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelector('.dashboard__item__img--rented');
    quantiaDeJogosAlugados();
})

