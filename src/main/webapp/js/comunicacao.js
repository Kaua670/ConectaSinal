
// ==========================================
// CONECTASINAL
// CENTRAL DE COMUNICAÇÃO
// ==========================================


// ==========================================
// TROCAR MODO
// ==========================================

function selecionarModo(modo) {

    const modoSurdo =
        document.getElementById("modo-surdo");

    const modoLibras =
        document.getElementById("modo-libras");

    const botoes =
        document.querySelectorAll(".modo-btn");


    // Remove o destaque dos botões

    botoes.forEach(function(botao) {

        botao.classList.remove("ativo");

    });


    // MODO SURDO → OUVINTE

    if (modo === "surdo") {

        modoSurdo.classList.remove("oculto");

        modoLibras.classList.add("oculto");

        botoes[0].classList.add("ativo");

    }


    // MODO OUVINTE → SURDO

    if (modo === "libras") {

        modoSurdo.classList.add("oculto");

        modoLibras.classList.remove("oculto");

        botoes[1].classList.add("ativo");

    }

}


// ==========================================
// MOSTRAR MENSAGEM DO SURDO
// ==========================================

function mostrarMensagemSurdo() {

    const campo =
        document.getElementById("mensagemSurdo");


    const mensagem =
        campo.value.trim();


    if (mensagem === "") {

        alert(
            "Digite uma mensagem antes de continuar."
        );

        return;

    }


    document.getElementById(
        "mensagemExibida"
    ).textContent = mensagem;


    document.getElementById(
        "mensagemTela"
    ).classList.remove("oculto");

}


// ==========================================
// FECHAR MENSAGEM
// ==========================================

function fecharMensagem() {

    document.getElementById(
        "mensagemTela"
    ).classList.add("oculto");

}


// ==========================================
// MOSTRAR LIBRAS
// ==========================================

function mostrarLibras(frase, video) {

    // Coloca a frase na tela

    document.getElementById(
        "fraseLibras"
    ).textContent = frase;


    // Localiza o vídeo

    const videoElemento =
        document.getElementById("videoLibras");


    const fonte =
        document.getElementById("videoFonte");


    // Troca o vídeo

    fonte.src = video;


    // Recarrega o elemento

    videoElemento.load();


    // Abre a janela

    document.getElementById(
        "librasTela"
    ).classList.remove("oculto");

}


// ==========================================
// FECHAR LIBRAS
// ==========================================

function fecharLibras() {

    const tela =
        document.getElementById("librasTela");


    const video =
        document.getElementById("videoLibras");


    // Para o vídeo

    video.pause();

    video.currentTime = 0;


    // Fecha a janela

    tela.classList.add("oculto");

}


// ==========================================
// FILTRAR CATEGORIAS
// ==========================================

function filtrarCategoria(categoria) {

    const frases =
        document.querySelectorAll(".frase-card");


    const botoes =
        document.querySelectorAll(".categoria");


    // Remove seleção anterior

    botoes.forEach(function(botao) {

        botao.classList.remove("ativa");

    });


    // Descobre qual botão foi clicado

    botoes.forEach(function(botao) {

        if (
            botao.getAttribute("onclick")
                .includes("'" + categoria + "'")
        ) {

            botao.classList.add("ativa");

        }

    });


    // Mostra/esconde frases

    frases.forEach(function(frase) {

        const categoriaFrase =
            frase.getAttribute("data-categoria");


        if (
            categoria === "todos" ||
            categoriaFrase === categoria
        ) {

            frase.style.display = "flex";

        } else {

            frase.style.display = "none";

        }

    });

}


// ==========================================
// CONTADOR DE CARACTERES
// ==========================================

const campoMensagem =
    document.getElementById("mensagemSurdo");


if (campoMensagem) {

    campoMensagem.addEventListener(
        "input",
        function() {

            document.getElementById(
                "contadorSurdo"
            ).textContent =
                this.value.length;

        }
    );

}


// ==========================================
// INTEGRAÇÃO COM O BACKEND
// ==========================================

async function carregarFrases() {

    try {

        // Faz uma requisição para o servidor Node.js

        const resposta =
            await fetch("http://localhost:3000/api/frases");


        // Verifica se o servidor respondeu corretamente

        if (!resposta.ok) {

            throw new Error(
                "Erro HTTP: " + resposta.status
            );

        }


        // Converte a resposta para JSON

        const frases =
            await resposta.json();


        // Mostra as frases recebidas no console

        console.log(
            "Frases recebidas do backend:",
            frases
        );


    } catch (erro) {

        console.error(
            "Erro ao conectar com o backend:",
            erro
        );

    }

}


// ==========================================
// INICIAR CONEXÃO COM O BACKEND
// ==========================================

carregarFrases();