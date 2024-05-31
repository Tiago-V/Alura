// Habilitação

// alert('Boas vindas ao nosso site!')

// let nome = 'Lua'
// let idade = 25
// let numeroDeVendas = 50
// let saldoDisponivel = 1000

// alert('Erro, preencha todos os campos!')

// nome = prompt('Qual o seu nome?')
// idade = prompt('Qual a sua idade?')

// if (idade > 18) {
//     alert('Pode tirar a habilitação!')
// } else {
//     alert('Não pode tirar a habilitação!')
// }

// -------------------------------------------------------
// Numero Secreto

alert('Boas vindas ao jogo do número secreto!!');

let numeroMaximo = 1000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute ;
let tentativa = 1;

console.log(numeroSecreto);


// Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Dê o seu melhor chute entre 1 e ${numeroMaximo}!`);

    if (chute == numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}!`);
        } else {
            alert(`O número secreto é maior que ${chute}!`);
        }
        tentativa++;
        console.log(tentativa);
    }
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
alert(`Você descobriu o número secreto (${numeroSecreto}) com ${tentativa} ${palavraTentativa}!!`)

// --------------------------------------------------------
// Desafio - Condicionais e concateção

// --- 1 ---
// let dia = prompt('Qual dia da semana é hoje?');

// if (dia == 'sábado' || dia == 'domingo' ? alert('Bom final de semana!') : alert('Boa semana!'));

// --- 2 ---
// let numero = prompt('Insira um número:')

// if (numero > 0) {
//     alert(`Número positivo ${numero}`);
// } else {
//     alert(`Número negativo ${numero}`);
// }

// --- 3 ---
// let pontuacao = prompt('Pontuação:');

// if (pontuacao >= 100) {
//     alert('Parabéns, você ganhou!');
// } else {
//     alert('Que pena, você perdeu...');
// }

// --- 4 ---
// let saldo = prompt('Insira o saldo:');
// alert(`O seu saldo é de R$${saldo},00`);

// --- 5 ---
// let nome = prompt('Insira seu nome: ');
// alert(`Boas vindas ${nome}`)

// --------------------------------------------------------
// Desafio - WHILE

// --- 1 ---
// let contador = 0

// while (contador < 10) {
//     contador++
//     console.log(contador)
// }

// --- 2 ---
// let contador = 10

// while (contador > 0) {
//     console.log(contador)
//     contador--
// }

// --- 3 --- 
// let contador = prompt('Insira o valor desejado para contagem regressiva:')

// while (contador >= 0) {
//     console.log(contador)
//     contador--
// }

// --- 3 --- 
// let numeroMaximo = prompt('Insira o valor desejado para contagem progressiva:')
// let contador = 0

// while (contador <= numeroMaximo) {
//     console.log(contador)
//     contador++
// }
