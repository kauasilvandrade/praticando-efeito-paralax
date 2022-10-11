const btnOpen = document.querySelector('.btn-open');
const Menu = document.querySelector('.listaDeLinks');
const btnClose = document.querySelector('.btn-close');

btnOpen.addEventListener('click', () => {
    Menu.classList.toggle('ativado');
    btnClose.classList.toggle('ativado');
})

btnClose.addEventListener('click', () => {
    Menu.classList.remove('ativado');
})