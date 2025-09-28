/* Eventos DOM: Crie uma página HTML com um botão que, quando clicado, exiba um alerta que diga “Você clicou no botão!”.*/
let botao = document.getElementById('botao_clique')
botao.addEventListener('click',clicado)
function clicado() {
    alert('VOCÊ CLICOU NO BOTÃO!')
}