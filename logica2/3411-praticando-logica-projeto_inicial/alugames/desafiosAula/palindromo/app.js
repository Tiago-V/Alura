//Palindromo - Palavra que lida ao contrario permanece igual

essaPalavraEUmPalindromo('joia');

function essaPalavraEUmPalindromo(palavra){
    var separandoAsLetrasDaPalavra = palavra.split('');
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse('');
    palavraInvertida = palavraInvertida.join('');
        if(palavra == palavraInvertida){
            alert(`A palavra ${palavra} é um palindromo.`);
        } else {
            alert(`A palavra ${palavra} NÃO é um palindromo.`);
        }
}