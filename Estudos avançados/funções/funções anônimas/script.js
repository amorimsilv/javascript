// https://www.youtube.com/watch?v=2EAfSeKZNiQ

const botao = document.getElementById('botao-funcao')

botao.addEventListener('click', function() {
    alert('Você clicou no botão!')
})

const botao2 = document.getElementById('botaotwo')

botao2.addEventListener('click', function() {
    botao2.style.opacity = 0
})

botao2.addEventListener('onclick', function() {
    botao2.style.opacity = 0
})