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
    alterarStatusBotaoReiniciarEnabled();
}
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function limparCampos() {
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
}
function alterarStatusBotaoReiniciarEnabled() {
    if (statusBotaoReiniciar.classList = 'container__botao-desabilitado') {
        statusBotaoReiniciar.classList.remove('container__botao-desabilitado');
        statusBotaoReiniciar.classList.add('container__botao-habilitado');
        statusBotaoReiniciar.removeAttribute('disabled');
        statusBotaoReiniciar.setAttribute('enabled');
    }
}
function alterarStatusBotaoReiniciarDisabled() {
    if (statusBotaoReiniciar.classList = 'container__botao-habilitado') {
        statusBotaoReiniciar.classList.remove('container__botao-habilitado');
        statusBotaoReiniciar.classList.add('container__botao-desabilitado');
        statusBotaoReiniciar.removeAttribute('enabled');
        statusBotaoReiniciar.setAttribute('disabled');
    }
}
function reiniciar() {
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotaoReiniciarDisabled();
    limparCampos();
}