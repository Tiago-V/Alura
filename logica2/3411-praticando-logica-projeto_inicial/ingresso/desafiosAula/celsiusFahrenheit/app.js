function calcular(){
    let qtdGraus = document.getElementById("temperatura").value;
    let medida = document.getElementById("medida").value;

    if (medida == "celsius") {
        resultado = (qtdGraus * 1.8) + 32;
        alert(`${qtdGraus}Cº -> ${resultado}Fº`)
    } else {
        resultado = (qtdGraus - 32) / 1.8;
        alert(`${qtdGraus}Fº -> ${resultado}Cº`)
    } 
} 