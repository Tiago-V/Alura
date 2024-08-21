//Calculadora simples
function calcular(){
    let operacao = document.getElementById("operacoes").value;
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    if (operacao == "adicao") {
        resultado = adicao(num1, num2);
        alert(`A soma entre ${num1} e ${num2} é igual a ${resultado}.`);

    } else if (operacao == "subtracao") {
        resultado = subtracao(num1, num2);
        alert(`A subtração entre ${num1} e ${num2} é igual a ${resultado}.`);

    } else if (operacao == "multiplicacao") {
        resultado = multiplicacao(num1, num2);
        alert(`A multiplicação de ${num1} por ${num2} é igual a ${resultado}.`);

    } else if (operacao == "divisao") {
        resultado = divisao(num1, num2);
        alert(`A divisão de ${num1} por ${num2} é igual a ${resultado}`)
    }

}

function adicao(num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

function subtracao(num1, num2){
    let resultado = num1 - num2;
    return resultado;
}

function multiplicacao(num1, num2){
    let resultado = num1 * num2;
    return resultado;
}

function divisao(num1, num2) {
    let resultado = num1 / num2;
    return resultado;
}