const tela = document.getElementById("emergenciaTela");
const icone = document.getElementById("emergenciaIcone");
const mensagem = document.getElementById("emergenciaMensagem");
const btnFechar = document.getElementById("btnFecharEmergencia");
const btnVoltar = document.getElementById("btnVoltarEmergencia");
const cards = document.querySelectorAll(".emergencia-card");

function abrirMensagem(texto, emoji) {
    mensagem.textContent = texto;
    icone.textContent = emoji;
    tela.classList.remove("oculto");
}

function fecharMensagem() {
    tela.classList.add("oculto");
}

cards.forEach(function (card) {
    card.addEventListener("click", function () {
        abrirMensagem(card.dataset.mensagem, card.dataset.icone);
    });
});

btnFechar.addEventListener("click", fecharMensagem);
btnVoltar.addEventListener("click", fecharMensagem);

// Fecha ao clicar no fundo escuro
tela.addEventListener("click", function (evento) {
    if (evento.target === tela) {
        fecharMensagem();
    }
});

// Fecha com a tecla Esc
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        fecharMensagem();
    }
});

function falar(texto) {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel(); // interrompe qualquer fala anterior

    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    fala.rate = 0.9;   // um pouco mais devagar, mais claro
    fala.volume = 1;

    window.speechSynthesis.speak(fala);
}

function abrirMensagem(texto, emoji) {
    mensagem.textContent = texto;
    icone.textContent = emoji;
    tela.classList.remove("oculto");
    falar(texto);
}

function fecharMensagem() {
    tela.classList.add("oculto");
    window.speechSynthesis.cancel();
}

const btnOuvir = document.getElementById("btnOuvirEmergencia");

btnOuvir.addEventListener("click", function () {
    falar(mensagem.textContent);
});