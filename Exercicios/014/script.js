function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        // BOM DIA!
        img.src = 'imagens/dia.jpeg'
        document.body.style.background = '#3370A6'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imagens/tarde.jpeg'
        document.body.style.background = '#1B3240'
    } else {
        // BOA NOITE!
        img.src = 'imagens/noite.jpeg'
        document.body.style.background = '#012626'
    }
}

