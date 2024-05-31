// 1
function olaMundo() {
    console.log('Olá Mundo!');
}

// 2 
function olaNome(nome) {
    console.log(`Olá ${nome}!`);
}

// 3
function dobroNumero(numero) {
    return numero * 2;
}

// 4
function maiorNumero(numero1, numero2) {
    if(numero1 > numero2){
        return numero1
    } else if(numero2 > numero1) {
        return numero2
    } else {
        return 'Os números são iguais'
    }
}

// 5
function potenciaNumero(numero) {
    return numero ** 2
}
