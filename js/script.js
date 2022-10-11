const btnOpen = document.querySelector('.btn-open');
const Menu = document.querySelector('.listaDeLinks');
const inputBusca = document.querySelector('.input-box');

btnOpen.addEventListener('click', () => {
    Menu.classList.toggle('ativado');
    btnClose.classList.toggle('ativado');
    inputBusca.classList.toggle('ativado');
})