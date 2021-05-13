function horario() {
    var msg = document.getElementById("d1")
    var imag = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 10
    var corpo = document.querySelector("body")

    if (hora > 18 || hora < 6){
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`    
        imag.src = 'img/fotonoite.png'
        corpo.style.background = "#0c2461"
    }
    else if (hora > 5 && hora < 12){
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        imag.src = 'img/fotodia.png'
        corpo.style.background = "#38ada9"
    }
    else {
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        imag.src = 'img/fototarde.png'
        corpo.style.background = "#f8c291"
    }

}