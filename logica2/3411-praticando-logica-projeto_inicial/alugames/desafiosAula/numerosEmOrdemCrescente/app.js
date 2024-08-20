//Crie uma função que receba 3 números e os exiba em ordem crescente

function ordenarNumeros (a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`)
}

ordenarNumeros(3, 65, 2);