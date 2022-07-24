
/*document.querySelectorAll('.card').forEach
(item => {
    item.addEventListener('click', (e) => {
        e.target.scrollIntoView({
            inline:'center',
            behavior:'smooth',
        });
    });
});*/


function selecteq()
{
    let eq = document.querySelector("#equipe")
    let sbr = document.querySelector("#sobre")

    sbr.classList.remove('selecionado')
    eq.classList.add('selecionado')

}


function selectsbr()
{
    let eq = document.querySelector("#equipe")
    let sbr = document.querySelector("#sobre")

    eq.classList.remove('selecionado')
    sbr.classList.add('selecionado')

  

}