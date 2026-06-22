// MENU HAMBÚRGUER

const menuToggle = document.getElementById('menuToggle');
const menuPrincipal = document.getElementById('menu-principal');

if (menuToggle && menuPrincipal) {

    menuToggle.addEventListener('click', () => {

        menuPrincipal.classList.toggle('menu-aberto');

        menuToggle.classList.toggle('ativo');

        const expandido =
            menuPrincipal.classList.contains('menu-aberto');

        menuToggle.setAttribute(
            'aria-expanded',
            expandido
        );

    });

    const linksDoMenu =
        menuPrincipal.querySelectorAll('a');

    linksDoMenu.forEach((link) => {

        link.addEventListener('click', () => {

            menuPrincipal.classList.remove('menu-aberto');
            menuToggle.classList.remove('ativo');

            menuToggle.setAttribute(
                'aria-expanded',
                'false'
            );

        });

    });

}

// FORMULÁRIO

const formulario =
    document.getElementById('formContato');

const mensagemSucesso =
    document.getElementById('mensagemSucesso');

if (formulario) {

    formulario.addEventListener('submit', (event) => {

        event.preventDefault();

        if (mensagemSucesso) {

            mensagemSucesso.textContent =
                'Solicitação enviada com sucesso! Em breve entraremos em contato.';

        }

        formulario.reset();

    });

}