var data = new Date()
var min = data.getMinutes()
var hora = data.getHours()

function horario() {
    var msg = document.querySelector("#d1")
    var imag = document.querySelector("#imagem")
    var corpo = document.querySelector("body")

    if (hora >= 18 || hora < 6) {
        msg.innerHTML = "Boa noite!"
        if(hora != 0 && hora != 1) {
            msg.innerHTML += ` Agora são ${hora} horas` 
        }
        else if (hora == 1) {
            msg.innerHTML += ` Agora é 1 hora`            
        }
        else {
            msg.innerHTML += ` Agora é meia noite`
        }
        imag.src = 'img/fotonoite.png'
        corpo.style.background = "#0c2461"
    }
    else if (hora > 5 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora são ${hora} horas`
        imag.src = 'img/fotodia.png'
        corpo.style.background = "#38ada9"
    }
    else if (hora >= 12 && hora < 18) {
        msg.innerHTML = "Boa tarde!"
        if(hora == 12 ){
            msg.innerHTML += ` Agora é meio dia`
        }
        else {
            msg.innerHTML += ` Agora são ${hora} horas`
        }
        imag.src = 'img/fototarde.png'
        corpo.style.background = "#f8c291"
    }
    if (min != 0 && min != 1 && min != 30) {
        msg.innerHTML += ` e ${min} minutos.`
    }
    else if (min == 0) {
        msg.innerHTML += ` em ponto.`
    }
    else if (min == 30) {
        msg.innerHTML += ` e meia.`
    }
    else {
        msg.innerHTML += ` e 1 minuto.`
    }

}

function input() {
    var hora_input = document.querySelector("input#user-ctime").value.split(':')[0]
    var min_input = document.querySelector("input#user-ctime").value.split(':')[1]
    hora = Number(hora_input);
    min = Number(min_input)
    horario()
}



