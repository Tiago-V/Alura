let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

function consoleClick() {
    console.log('O botão console foi clicado.')
}

function alertClick() {
    alert('Eu amo JS!')
}

function promptClick() {
    cidade = prompt('Cite uma cidade do Brasil.')
    alert(`Eu estive em ${cidade} e lembrei de você.`)
}

function somaClick() {
    num1 = parseInt(prompt('Insira o primeiro número para a soma:'))
    num2 = parseInt(prompt('Insira o segundo número para a soma:'))

    alert(`O valor da soma é igual à ${num1 + num2}`)
}