let statusBotaoSortear = document.getElementById('btn-sortear');
let statusBotaoReiniciar = document.getElementById('btn-reiniciar');
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
    alterarStatusBotaoSortear();
    alterarStatusBotaoReiniciar();
}
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function alterarStatusBotaoReiniciar() {
    if (statusBotaoReiniciar.classList = 'container__botao-desabilitado') {
        statusBotaoReiniciar.classList.remove('container__botao-desabilitado');
        statusBotaoReiniciar.classList.add('container__botao-habilitado');
        statusBotaoReiniciar.removeAttribute('disabled');
        statusBotaoReiniciar.setAttribute('enabled');
    } 
}
function alterarStatusBotaoSortear() {
    if (statusBotaoSortear.classList = 'container__botao-habilitado') {
        statusBotaoSortear.classList.remove('container__botao-habilitado');
        statusBotaoSortear.classList.add('container__botao-desabilitado');
        statusBotaoSortear.removeAttribute('enabled');
        statusBotaoSortear.setAttribute('disabled', true);
    }
}
function reiniciar() {
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
    alterarStatusBotaoReiniciar();
    alterarStatusBotaoSortear();
    retornarStatusPadrao();
}
function retornarStatusPadrao (){
    statusBotaoReiniciar.removeAttribute('enabled');
    statusBotaoReiniciar.setAttribute('disabled');
}