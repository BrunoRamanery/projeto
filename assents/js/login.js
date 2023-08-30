const mode = document.getElementById('mode_icon');  /*marca o icone lua*/

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');  /*o if troca o simbolo de lua pelo simplo de sol*/

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');       /*adiciona a classe escuro*/
        return ;
    }

    mode.classList.remove('fa-sun');   /*troca o sol pela lua*/
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
});
