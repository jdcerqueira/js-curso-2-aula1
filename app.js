let numerosSorteados = [];
let numeroSecreto;
let tentativas;

iniciarJogo();


// Funções //
function iniciarJogo() {
    definirTextoTag("h1", "Jogo do número secreto");
    definirTextoTag("p", "Escolha um número entre 1 e 10.");
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.querySelector("input").value = "";
}

function verificarChute() {
    let chute = parseInt(document.querySelector("input").value);
    let mensagem = `Parabéns! Você acertou o número secreto em ${tentativas} tentativa${tentativas > 1 ? "s" : ""}!`;

    if (chute === numeroSecreto) {
        definirTextoTag("h1", "Acertou!");
        definirTextoTag("p", mensagem);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        definirTextoTag("h1", "Errou!");
        definirTextoTag("p", "O número secreto é " + numeroMaior(numeroSecreto, chute) + ". Tente novamente!");
        document.querySelector("input").value = "";
        tentativas++;
    }   
}

function numeroMaior(a,b) {
    return a > b ? "maior" : "menor";
}

function definirTextoTag(tag, texto) {
    let tagElement = document.querySelector(tag);
    tagElement.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 0.9});
}

function gerarNumeroAleatorio() {
    alert("Números sorteados: " + numerosSorteados.join(", "));

    let numeroAleatorio = parseInt(Math.floor(Math.random() * 10) + 1);
    if (numerosSorteados.includes(numeroAleatorio)) {
        return gerarNumeroAleatorio();
    }
    numerosSorteados.push(numeroAleatorio);
    return numeroAleatorio;
}