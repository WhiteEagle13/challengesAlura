let totalGeral = 0;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = "R$ 0";
let carrinho = document.getElementById('lista-produtos');
carrinho.textContent = "";

function adicionar() {
    // armazenar as variáveis
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if (quantidade == 0)
    {
        alert("Selecione uma quantidade válida");
    } else {
    // calcular o preço (subtotal)
    let preco = quantidade * valorUnitario;
    // adicionar item no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<\section class="carrinho__produtos__produto">
    <span  class="texto-azul"> ${quantidade}x </span> ${nomeProduto} <span class="texto-azul"> ${preco} </span>
  </section>`;
    // atualizar o valor total
    totalGeral = totalGeral + preco;
    campoTotal.textContent = `R$ ${totalGeral}`;
    }
}

function limpar() {
    totalGeral = 0;
    campoTotal.textContent = "R$ 0";
    carrinho.textContent = "";
}