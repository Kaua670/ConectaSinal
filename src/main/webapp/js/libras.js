/* =========================================================
   DADOS
   Cada sinal usa o vídeo:  videos/sinais/<id>.mp4
   Para adicionar um sinal, basta incluir uma linha em SINAIS
   e colocar o vídeo com o mesmo nome do id.
   ========================================================= */

const PASTA_VIDEOS = "videos/sinais/";
const CHAVE_PROGRESSO = "conectasinal_libras_aprendidos";

const CATEGORIAS = [
    { id: "todos", nome: "Todos" },
    { id: "cumprimentos", nome: "Cumprimentos" },
    { id: "pessoas", nome: "Pessoas" },
    { id: "dia-a-dia", nome: "Dia a dia" },
    { id: "respostas", nome: "Respostas e sentimentos" }
];

const SINAIS = [
    // Cumprimentos
    { id: "oi", palavra: "Oi", icone: "👋", categoria: "cumprimentos" },
    { id: "tchau", palavra: "Tchau", icone: "🖐️", categoria: "cumprimentos" },
    { id: "bom-dia", palavra: "Bom dia", icone: "☀️", categoria: "cumprimentos" },
    { id: "boa-tarde", palavra: "Boa tarde", icone: "🌤️", categoria: "cumprimentos" },
    { id: "boa-noite", palavra: "Boa noite", icone: "🌙", categoria: "cumprimentos" },
    { id: "tudo-bem", palavra: "Tudo bem?", icone: "👍", categoria: "cumprimentos" },
    { id: "obrigado", palavra: "Obrigado(a)", icone: "🙏", categoria: "cumprimentos" },
    { id: "por-favor", palavra: "Por favor", icone: "🤲", categoria: "cumprimentos" },
    { id: "desculpa", palavra: "Desculpa", icone: "🙇", categoria: "cumprimentos" },

    // Pessoas
    { id: "mae", palavra: "Mãe", icone: "👩", categoria: "pessoas" },
    { id: "pai", palavra: "Pai", icone: "👨", categoria: "pessoas" },
    { id: "familia", palavra: "Família", icone: "👨‍👩‍👧", categoria: "pessoas" },
    { id: "amigo", palavra: "Amigo(a)", icone: "🤝", categoria: "pessoas" },

    // Dia a dia
    { id: "agua", palavra: "Água", icone: "💧", categoria: "dia-a-dia" },
    { id: "comer", palavra: "Comer", icone: "🍽️", categoria: "dia-a-dia" },
    { id: "beber", palavra: "Beber", icone: "🥤", categoria: "dia-a-dia" },
    { id: "banheiro", palavra: "Banheiro", icone: "🚻", categoria: "dia-a-dia" },
    { id: "dormir", palavra: "Dormir", icone: "😴", categoria: "dia-a-dia" },
    { id: "casa", palavra: "Casa", icone: "🏠", categoria: "dia-a-dia" },
    { id: "escola", palavra: "Escola", icone: "🏫", categoria: "dia-a-dia" },
    { id: "trabalho", palavra: "Trabalho", icone: "💼", categoria: "dia-a-dia" },

    // Respostas e sentimentos
    { id: "sim", palavra: "Sim", icone: "✅", categoria: "respostas" },
    { id: "nao", palavra: "Não", icone: "❌", categoria: "respostas" },
    { id: "ajuda", palavra: "Ajuda", icone: "🆘", categoria: "respostas" },
    { id: "nao-entendi", palavra: "Não entendi", icone: "🤔", categoria: "respostas" },
    { id: "repetir", palavra: "Repetir", icone: "🔁", categoria: "respostas" },
    { id: "feliz", palavra: "Feliz", icone: "😊", categoria: "respostas" },
    { id: "triste", palavra: "Triste", icone: "😢", categoria: "respostas" },
    { id: "amor", palavra: "Amor", icone: "❤️", categoria: "respostas" }
];


/* =========================================================
   ELEMENTOS
   ========================================================= */

const categoriasEl = document.getElementById("categorias");
const listaEl = document.getElementById("listaSinais");
const semResultadoEl = document.getElementById("semResultado");
const buscaEl = document.getElementById("busca");

const progressoTextoEl = document.getElementById("progressoTexto");
const progressoBarraEl = document.getElementById("progressoBarra");
const progressoPreenchidoEl = document.getElementById("progressoPreenchido");
const btnZerar = document.getElementById("btnZerar");

const telaEl = document.getElementById("librasTela");
const iconeEl = document.getElementById("sinalIcone");
const tituloEl = document.getElementById("fraseLibras");
const videoEl = document.getElementById("sinalVideo");
const videoAusenteEl = document.getElementById("videoAusente");
const btnAprendido = document.getElementById("btnAprendido");
const btnAnterior = document.getElementById("btnAnterior");
const btnProximo = document.getElementById("btnProximo");
const btnFecharSinal = document.getElementById("btnFecharSinal");
const btnVoltarSinal = document.getElementById("btnVoltarSinal");


/* =========================================================
   ESTADO
   ========================================================= */

let categoriaAtual = "todos";
let termoBusca = "";
let listaAtual = [];
let indiceAtual = 0;
let aprendidos = carregarAprendidos();


/* =========================================================
   PROGRESSO SALVO NO NAVEGADOR
   ========================================================= */

function carregarAprendidos() {
    try {
        const salvo = localStorage.getItem(CHAVE_PROGRESSO);
        return new Set(salvo ? JSON.parse(salvo) : []);
    } catch (erro) {
        return new Set();
    }
}

function salvarAprendidos() {
    try {
        localStorage.setItem(CHAVE_PROGRESSO, JSON.stringify(Array.from(aprendidos)));
    } catch (erro) {
        // se o navegador bloquear o armazenamento, o progresso só vale nesta visita
    }
}

function atualizarProgresso() {
    const total = SINAIS.length;
    const feitos = SINAIS.filter(function (sinal) {
        return aprendidos.has(sinal.id);
    }).length;
    const percentual = total === 0 ? 0 : Math.round((feitos / total) * 100);

    progressoTextoEl.textContent = feitos + " de " + total + " sinais aprendidos";
    progressoPreenchidoEl.style.width = percentual + "%";
    progressoBarraEl.setAttribute("aria-valuenow", percentual);
}


/* =========================================================
   LISTA DE SINAIS
   ========================================================= */

function normalizar(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function filtrarSinais() {
    const termo = normalizar(termoBusca.trim());

    return SINAIS.filter(function (sinal) {
        const daCategoria = categoriaAtual === "todos" || sinal.categoria === categoriaAtual;
        const combinaBusca = termo === "" || normalizar(sinal.palavra).includes(termo);
        return daCategoria && combinaBusca;
    });
}

function renderizarCategorias() {
    categoriasEl.innerHTML = "";

    CATEGORIAS.forEach(function (categoria) {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "categoria" + (categoria.id === categoriaAtual ? " ativa" : "");
        botao.textContent = categoria.nome;

        botao.addEventListener("click", function () {
            categoriaAtual = categoria.id;
            renderizarCategorias();
            renderizarSinais();
        });

        categoriasEl.appendChild(botao);
    });
}

function renderizarSinais() {
    listaAtual = filtrarSinais();
    listaEl.innerHTML = "";
    semResultadoEl.classList.toggle("oculto", listaAtual.length > 0);

    listaAtual.forEach(function (sinal, indice) {
        const aprendido = aprendidos.has(sinal.id);

        const card = document.createElement("button");
        card.type = "button";
        card.className = "frase-card" + (aprendido ? " aprendido" : "");
        card.innerHTML =
            "<span>" + sinal.icone + "</span>" +
            "<strong>" + sinal.palavra + "</strong>" +
            "<small>" + (aprendido ? "✓ Aprendido" : "Toque para ver o sinal") + "</small>";

        card.addEventListener("click", function () {
            abrirSinal(indice);
        });

        listaEl.appendChild(card);
    });

    atualizarProgresso();
}


/* =========================================================
   JANELA DO SINAL
   ========================================================= */

function atualizarBotaoAprendido(sinal) {
    const feito = aprendidos.has(sinal.id);
    btnAprendido.classList.toggle("ativo", feito);
    btnAprendido.textContent = feito ? "✓ Aprendido" : "Marcar como aprendido";
}

function abrirSinal(indice) {
    indiceAtual = indice;
    const sinal = listaAtual[indice];

    iconeEl.textContent = sinal.icone;
    tituloEl.textContent = sinal.palavra;

    videoAusenteEl.classList.add("oculto");
    videoEl.classList.remove("oculto");
    videoEl.src = PASTA_VIDEOS + sinal.id + ".mp4";
    videoEl.load();

    const promessa = videoEl.play();
    if (promessa !== undefined) {
        promessa.catch(function () {
            // o navegador pode bloquear o início automático; o usuário usa o play
        });
    }

    atualizarBotaoAprendido(sinal);
    btnAnterior.disabled = listaAtual.length < 2;
    btnProximo.disabled = listaAtual.length < 2;
    telaEl.classList.remove("oculto");
}

function fecharSinal() {
    telaEl.classList.add("oculto");
    videoEl.pause();
    videoEl.removeAttribute("src");
    videoEl.load();
}

function moverSinal(passo) {
    if (listaAtual.length < 2) return;
    const novo = (indiceAtual + passo + listaAtual.length) % listaAtual.length;
    abrirSinal(novo);
}

// Se o arquivo de vídeo não existir, mostra o aviso no lugar do vídeo
videoEl.addEventListener("error", function () {
    if (!videoEl.getAttribute("src")) return;

    console.warn("Vídeo não encontrado: " + videoEl.getAttribute("src"));
    videoEl.classList.add("oculto");
    videoAusenteEl.classList.remove("oculto");
});


/* =========================================================
   EVENTOS
   ========================================================= */

buscaEl.addEventListener("input", function () {
    termoBusca = buscaEl.value;
    renderizarSinais();
});

btnAprendido.addEventListener("click", function () {
    const sinal = listaAtual[indiceAtual];

    if (aprendidos.has(sinal.id)) {
        aprendidos.delete(sinal.id);
    } else {
        aprendidos.add(sinal.id);
    }

    salvarAprendidos();
    atualizarBotaoAprendido(sinal);
    renderizarSinais();
});

btnZerar.addEventListener("click", function () {
    if (aprendidos.size === 0) return;

    if (confirm("Deseja zerar o seu progresso?")) {
        aprendidos.clear();
        salvarAprendidos();
        renderizarSinais();
    }
});

btnAnterior.addEventListener("click", function () {
    moverSinal(-1);
});

btnProximo.addEventListener("click", function () {
    moverSinal(1);
});

btnFecharSinal.addEventListener("click", fecharSinal);
btnVoltarSinal.addEventListener("click", fecharSinal);

// Fecha ao clicar no fundo escuro
telaEl.addEventListener("click", function (evento) {
    if (evento.target === telaEl) {
        fecharSinal();
    }
});

// Teclado: Esc fecha, setas trocam de sinal
document.addEventListener("keydown", function (evento) {
    if (telaEl.classList.contains("oculto")) return;

    if (evento.key === "Escape") {
        fecharSinal();
    } else if (evento.key === "ArrowRight") {
        moverSinal(1);
    } else if (evento.key === "ArrowLeft") {
        moverSinal(-1);
    }
});


/* =========================================================
   INÍCIO
   ========================================================= */

renderizarCategorias();
renderizarSinais();