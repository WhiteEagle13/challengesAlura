let btnJogo = document.getElementById('1');
function alterarStatus() {
    if (btnJogo.classList = 'dashboard__item__button'){
        btnJogo.classList.remove('dashboard__item__button');
        btnJogo.classList.add('dashboard__item__button--return');
    } else {
        btnJogo.classList.remove('dashboard__item__button--return');
        btnJogo.classList.add('dashboard__item__button');
    }
}