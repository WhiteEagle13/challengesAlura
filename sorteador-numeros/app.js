function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroMinimo = parseInt(document.getElementById('de').value);
    let numeroMaximo = parseInt(document.getElementById('ate').value);
    let numeroAleatorio = obterNumeroAleatorio(numeroMinimo, numeroMaximo);
    let sorteados = [];
    for (let i = 0; i < quantidadeDeNumeros; i++) {
        do {
            numeroAleatorio = obterNumeroAleatorio(numeroMinimo, numeroMaximo);
        } while (sorteados.includes(numeroAleatorio)); 
        sorteados.push(numeroAleatorio);
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Os números sorteados foram: ${sorteados}</label>`;
    alterarStatusBotao();
}
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao (){
    let statusBotao = document.getElementById('btn-reiniciar');
    if (statusBotao.classList.contains = 'container__botao-desabilitado') {
        statusBotao.classList.remove('container__botao-desabilitado');
        statusBotao.classList.add('container__botao');
    } else {
        statusBotao.classList.remove('container__botao');
        statusBotao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
    alterarStatusBotao();
}
   
