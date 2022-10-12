const btnOpen = document.querySelector('.btn-open');
const hamburguer = document.querySelector('.hamburguer')
const Menu = document.querySelector('.listaDeLinks');
const inputBusca = document.querySelector('.input-busca');
const linkMenu = document.querySelector('.link');

function mudouTamanho() {
    if (window.innerWidth <= 968) {
        hamburguer.classList.remove('ativado');
        Menu.classList.remove('ativado');
        inputBusca.classList.remove('ativado');
    }
}

btnOpen.addEventListener('click', () => {
    hamburguer.classList.toggle('ativado');
    Menu.classList.toggle('ativado');
    inputBusca.classList.toggle('ativado');
})

linkMenu.addEventListener('click', () => {
    hamburguer.classList.remove('ativado');
    Menu.classList.remove('ativado');
    inputBusca.classList.remove('ativado');
})