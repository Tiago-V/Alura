let totalGeral = 0;

let precoTotal = document.getElementById("valor-total");

function adicionar(){
    //pegar o nome, quantidade e valor
    let produto = document.getElementById('produto').value
    let nome = produto.split(" - ")[0];
    let valor = produto.split("R$")[1];
    let quantidade = document.getElementById('quantidade').value

    //preço
    let preco = quantidade * valor

    //Condição, só adicionar ao carrinho quando tiver uma quantia diferente de 0
    if (quantidade != 0){
        //adicionar no carrinho
        let carrinho = document.getElementById("lista-produtos")
        carrinho.innerHTML = carrinho.innerHTML +
        `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${preco}</span>
        </section>`;

        //atualizar o valor final
        totalGeral = totalGeral + preco;
        precoTotal.innerHTML = `R$${totalGeral},00`
        document.getElementById('quantidade').value = 0;
    } else {
        alert("Insira um quantidade maior que 0.")
    }

}

function limpar(){
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = "";

    precoTotal.innerHTML = `R$0,00`;

    totalGeral = 0;
}