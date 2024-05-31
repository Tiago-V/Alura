// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcIMC(altura, peso) {
    let imc = peso / (altura * altura);
}

// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcFatorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }

    return fatorial
}

// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function dolarToReal(dolar) {
    return dolar * 4.80;
}

// 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function areaSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`A área é ${area}, e o perímetro é ${perimetro}`);
}

// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function areaSalaCircular(raio) {
    let pi = 3.14;
    let area = pi * (raio * raio);

    console.log(`A área é ${area}`);
}

// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}