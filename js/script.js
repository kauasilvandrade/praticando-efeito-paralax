const btnOpen = document.querySelector('.btn-open');

const hamburguer = document.querySelector('.hamburguer')
const Menu = document.querySelector('.listaDeLinks');
const inputBusca = document.querySelector('.input-busca');
const linkMenu1 = document.querySelector('.link1');
const linkMenu2 = document.querySelector('.link2');
const linkMenu3 = document.querySelector('.link3');
const linkMenu4 = document.querySelector('.link4');
const linkMenu5 = document.querySelector('.link5');
const linkMenu6 = document.querySelector('.link6');

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

inputBusca.addEventListener('click', () => {
    inputBusca.classList.contains('ativado');
    busca.style.display = 'block';
})

linkMenu1.addEventListener('click', () => {
    hamburguer.classList.remove('ativado');
    Menu.classList.remove('ativado');
    inputBusca.classList.remove('ativado');
})

linkMenu2.addEventListener('click', () => {
    hamburguer.classList.remove('ativado');
    Menu.classList.remove('ativado');
    inputBusca.classList.remove('ativado');
})

linkMenu3.addEventListener('click', () => {
    hamburguer.classList.remove('ativado');
    Menu.classList.remove('ativado');
    inputBusca.classList.remove('ativado');
})

linkMenu4.addEventListener('click', () => {
    hamburguer.classList.remove('ativado');
    Menu.classList.remove('ativado');
    inputBusca.classList.remove('ativado');
})

linkMenu5.addEventListener('click', () => {
    hamburguer.classList.remove('ativado');
    Menu.classList.remove('ativado');
    inputBusca.classList.remove('ativado');
})

linkMenu6.addEventListener('click', () => {
    hamburguer.classList.remove('ativado');
    Menu.classList.remove('ativado');
    inputBusca.classList.remove('ativado');
})