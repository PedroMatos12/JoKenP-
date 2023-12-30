var p = document.getElementById("p")
var pp = document.getElementById("ppt")
var ppp = document.getElementById("score")
var pv = document.getElementById("percent")
var pontos = (0)
var partidas = (0)
var vitoria = (0)

function jogar (escolhaUser) {
    let sorteio = Math.floor(Math.random() * 3)
    const music = new Audio ('alert.mp3')
    music.play()

    
    switch (sorteio) {
        case 0:
            p.innerHTML = ("O computador escolheu pedra e você escolheu " + (escolhaUser))

        break
        
        case 1:
            p.innerHTML = ("O computador escolheu papel e você escolheu " + (escolhaUser))

        break

        case 2:
            p.innerHTML = ("O computador escolheu tesoura e você escolheu " + (escolhaUser))
            
        break
    }

    if (escolhaUser == 'pedra') {
        pedra (sorteio)
    }
    if (escolhaUser == 'papel') {
        papel (sorteio)
    }
    if (escolhaUser == 'tesoura') {
        tesoura (sorteio)
    }
    document.getElementById("div").style.height = ("38vh")
}

function pedra (sorteio) {
    if (sorteio == 0) {
        pp.innerHTML = "Deu empate" 
        pp.style.color = "blue"
        partidas = (partidas + 1)
        var percentual = (vitoria * 100 / partidas)
        var porcentos = percentual.toFixed(2)
        pv.innerHTML = ("A porcentagem de vitórias é " +porcentos+ "%")    
    } if (sorteio == 2) {
        pp.innerHTML = "Você ganhou"
        pp.style.color = "green"
        vitoria = (vitoria + 1)
        pontos = (pontos + 1)
        partidas = (partidas + 1)
        ppp.innerHTML = ("Você tem " +pontos+ " pontos")
        var percentual = (vitoria * 100 / partidas)
        var porcentos = percentual.toFixed(2)
        pv.innerHTML = ("A porcentagem de vitórias é " +porcentos+ "%")  
    } if(sorteio == 1) {
        pp.innerHTML = "Você perdeu" 
        pp.style.color = "red" 
        pontos = (pontos - 1)
        ppp.innerHTML = ("Você tem " +pontos+ " pontos")
        partidas = (partidas + 1)
        var percentual = (vitoria * 100 / partidas)
        var porcentos = percentual.toFixed(2)
        pv.innerHTML = ("A porcentagem de vitórias é " +porcentos+ "%")   
    }
    document.getElementById("pvi").innerHTML = ("Você tem " + partidas + " partidas jogadas e " + vitoria + " vitórias")
}

function papel (sorteio) {
    if (sorteio == 0) {
        pp.innerHTML = "Você ganhou" 
        pp.style.color = "green"
        partidas = (partidas + 1)
        vitoria = (vitoria + 1)
        pontos = (pontos + 1)
        ppp.innerHTML = ("Você tem " +pontos+ " pontos")
        var percentual = (vitoria * 100 / partidas)
        var porcentos = percentual.toFixed(2)
        pv.innerHTML = ("A porcentagem de vitórias é " +porcentos+ "%")    
    } if (sorteio == 2) {
        pp.innerHTML = "Você perdeu"
        pp.style.color = "red"
        pontos = (pontos - 1)
        ppp.innerHTML = ("Você tem " +pontos+ " pontos")
        partidas = (partidas + 1)
        var percentual = (vitoria * 100 / partidas)
        var porcentos = percentual.toFixed(2)
        pv.innerHTML = ("A porcentagem de vitórias é " +porcentos+ "%")  
    } if(sorteio == 1) {
        pp.innerHTML = "Deu empate" 
        pp.style.color = "blue" 
        partidas = (partidas + 1)
        var percentual = (vitoria * 100 / partidas)
        var porcentos = percentual.toFixed(2)
        pv.innerHTML = ("A porcentagem de vitórias é " +porcentos+ "%")   
    }
    document.getElementById("pvi").innerHTML = ("Você tem " + partidas + " partidas jogadas e " + vitoria + " vitórias")
}

function tesoura (sorteio) {
    if (sorteio == 0) {
        pp.innerHTML = "Você perdeu" 
        pp.style.color = "red"
        pontos = (pontos - 1)
        ppp.innerHTML = ("Você tem " +pontos+ " pontos")
        partidas = (partidas + 1)
        var percentual = (vitoria * 100 / partidas)
        var porcentos = percentual.toFixed(2)
        pv.innerHTML = ("A porcentagem de vitórias é " +porcentos+ "%")    
    } if (sorteio == 2) {
        pp.innerHTML = "Deu empate"
        pp.style.color = "blue"
        partidas = (partidas + 1)
        var percentual = (vitoria * 100 / partidas)
        var porcentos = percentual.toFixed(2)
        pv.innerHTML = ("A porcentagem de vitórias é " +porcentos+ "%")  
    } if(sorteio == 1) {
        pp.innerHTML = "Você ganhou" 
        pp.style.color = "green" 
        pontos = (pontos + 1)
        ppp.innerHTML = ("Você tem " +pontos+ " pontos")
        partidas = (partidas + 1)
        var percentual = (vitoria * 100 / partidas)
        var porcentos = percentual.toFixed(2)
        pv.innerHTML = ("A porcentagem de vitórias é " +porcentos+ "%")   
    }
    document.getElementById("pvi").innerHTML = ("Você tem " + partidas + " partidas jogadas e " + vitoria + " vitórias")
}


/*
function papel (sorteio) {
    if (sorteio == 0) {
        pp.innerHTML = "Você ganhou" 
        pp.style.color = "green"   
        pontos = (pontos + 1)
        ppp.innerHTML = ("Você tem " +pontos+ " pontos")  
    } if (sorteio == 2) {
        pp.innerHTML = "Você perdeu"
        pp.style.color = "red"  
        pontos = (pontos - 1)
        ppp.innerHTML = ("Você tem " +pontos+ " pontos")
    } if(sorteio == 1) {
        pp.innerHTML = "Deu empate" 
        pp.style.color = "blue" 
    }
}

function tesoura (sorteio) {
    if (sorteio == 0) {
        pp.innerHTML = "Você perdeu"
        pp.style.color = "red" 
        pontos = (pontos - 1)
        ppp.innerHTML = ("Você tem " +pontos+ " pontos")     
    } if (sorteio == 2) {
        pp.innerHTML = "Deu empate" 
        pp.style.color = "blue" 
    } if(sorteio == 1) {
        pp.innerHTML = "Você ganhou" 
        pp.style.color = "green" 
        pontos = (pontos + 1)
        ppp.innerHTML = ("Você tem " +pontos+ " pontos")
    }
}
*/