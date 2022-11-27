
// FUNCÃO PARA ABRIR E FECHAR MENU
function menuShow() {

    // MENU
    const Menu = document.querySelector('.listaDeLinks');
    Menu.classList.toggle('ativado');
    
    // ICONE HAMBURGUER
    const hamburguer = document.querySelector('.hamburguer');   
    hamburguer.classList.toggle('ativado');
    
    // BUSCA
    const inputBusca = document.querySelector('.input-busca');
    inputBusca.classList.toggle('ativado');

    // FUNÇÃO FECHAR MENU AO CLICAR NO LINK
    function fecharMenuLink() {

        // MENU
        if (Menu.classList.contains('ativado')) {

            Menu.classList.remove('ativado');
            
        }
        
        // ICONE HAMBURGUER
        if (hamburguer.classList.contains('ativado')) {

            hamburguer.classList.remove('ativado');

        } 
        
        // BUSCA
        if (inputBusca.classList.contains('ativado')) {

            inputBusca.classList.remove('ativado');

        }
        
    }

    const linkFecharMenu = document.querySelectorAll('.irParaSecao');

    linkFecharMenu.forEach((irParaSecao) =>
        irParaSecao.addEventListener('click', fecharMenuLink)
    );

}

const btnOpen = document.querySelector('.btn-open');

btnOpen.addEventListener('click', menuShow);