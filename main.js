var numeroAleatorio = Math.floor(Math.random() * 100) + 1
console.log(numeroAleatorio)

var palpites = document.querySelector(".numerosDigitados")
var ultimoResultado = document.querySelector(".ultimoResultado")
var baixoOuAlto = document.querySelector(".baixoOuAlto")

var envioPalpite = document.querySelector(".botaoEnviar")
var campoPalpite = document.querySelector(".numeroEntrada")

var contagemPalpites = 1
var botaoReinicio

function verificarPalpite() {
    var palpiteUsuario = Number(campoPalpite.value)
    if(contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: "
    }
    palpites.textContent += palpiteUsuario + " "

    if(palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parabéns! Você acertou!"
        ultimoResultado.style.backgroundColor = "green"
        baixoOuAlto.textContent = ""
        configFimDeJogo()
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = "!!!FIM DE JOGO!!!"
        baixoOuAlto.textContent = ""
        configFimDeJogo()
    } else {
        ultimoResultado.textContent = "Errado!"
        ultimoResultado.style.backgroundColor = "red"
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = "Seu palpite está muito baixo!"
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = "Seu palpite está muito alto!"
        }
    }

    contagemPalpites++
    campoPalpite.value = ""
    campoPalpite.focus()
    
}

envioPalpite.addEventListener("click", verificarPalpite)

function configFimDeJogo() {
    campoPalpite.disabled = true
    envioPalpite.disabled = true
    botaoReinicio = document.createElement("button")
    botaoReinicio.textContent = "Iniciar novo jogo"
    document.body.appendChild(botaoReinicio)
    botaoReinicio.addEventListener("click", reiniciarJogo)
}

function reiniciarJogo() {
    contagemPalpites = 1
    var reiniciarPalpites = document.querySelectorAll(".palpites p")
    for(var i = 0; i < reiniciarPalpites.length; i++) {
        reiniciarPalpites[i].textContent = ""
    }
    
    botaoReinicio.parentNode.removeChild(botaoReinicio)

    campoPalpite.disabled = false
    envioPalpite.disabled = false
    campoPalpite.value = ""
    campoPalpite.focus()

    ultimoResultado.style.backgroundColor = "white"

    numeroAleatorio = Math.floor(Math.random() * 100) + 1
    console.log(numeroAleatorio)
}