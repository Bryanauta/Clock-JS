function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')    
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora <12) {
        //Bom dia
        img.src = 'manha.png'
        window.document.body.style.background = '#ffe653'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'tarde.png'
        window.document.body.style.background = '#e2947c'
        
    } else {
        //Boa noite
        img.src = 'noite.png'
        window.document.body.style.background = '#463755'
    }
}