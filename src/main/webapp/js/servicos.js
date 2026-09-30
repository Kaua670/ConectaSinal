/* =========================================================
   DADOS
   Para incluir um serviço ou uma frase, basta editar as listas
   abaixo. Cada frase tem um ícone e o texto que será mostrado
   na tela (e falado em voz alta).
   ========================================================= */

const SERVICOS = [

    {
        id: "geral",
        nome: "Qualquer lugar",
        icone: "🤟",
        resumo: "Para começar a conversa",
        descricao: "Frases úteis em qualquer atendimento.",
        dica: "",
        frases: [
            { icone: "🧏", texto: "Olá! Sou uma pessoa surda." },
            { icone: "✍️", texto: "Pode escrever, por favor?" },
            { icone: "🗣️", texto: "Fale devagar e olhe para mim, por favor." },
            { icone: "📱", texto: "Pode digitar no celular e me mostrar?" },
            { icone: "🤔", texto: "Não entendi. Pode repetir?" },
            { icone: "⏳", texto: "Um momento, por favor." },
            { icone: "🤟", texto: "Eu me comunico em Libras. Existe um intérprete disponível?" },
            { icone: "🙏", texto: "Agradeço a sua ajuda!" }
        ]
    },

    {
        id: "hospital",
        nome: "Hospital e clínicas",
        icone: "🏥",
        resumo: "Consultas e atendimento",
        descricao: "Atendimento, dor, alergias e orientações.",
        dica: 'Em caso de risco imediato, use a página <a href="emergencia.html">Emergência</a>.',
        frases: [
            { icone: "🏥", texto: "Preciso de atendimento médico." },
            { icone: "😣", texto: "Estou com dor e preciso de atendimento." },
            { icone: "📅", texto: "Tenho uma consulta marcada." },
            { icone: "🧏", texto: "Existe intérprete de Libras disponível?" },
            { icone: "⚠️", texto: "Tenho alergia a medicamentos." },
            { icone: "💊", texto: "Posso mostrar a lista dos meus medicamentos?" },
            { icone: "📍", texto: "Onde fica a recepção?" },
            { icone: "⏱️", texto: "Quanto tempo vai demorar o atendimento?" },
            { icone: "📝", texto: "Pode escrever as orientações do médico, por favor?" }
        ]
    },

    {
        id: "aplicativo",
        nome: "Uber e 99",
        icone: "🚗",
        resumo: "Corridas por aplicativo",
        descricao: "Mostre ao motorista antes e durante a corrida.",
        dica: "Antes de entrar, confira no aplicativo a placa, o modelo e o nome do motorista.",
        frases: [
            { icone: "🧏", texto: "Sou uma pessoa surda. Não consigo atender ligações." },
            { icone: "📱", texto: "Se precisar falar comigo, escreva pelo aplicativo." },
            { icone: "🚗", texto: "Você é o motorista da minha corrida?" },
            { icone: "📍", texto: "O destino está no aplicativo. Pode conferir?" },
            { icone: "🛑", texto: "Pode parar aqui, por favor?" },
            { icone: "⏳", texto: "Pode esperar um minuto, por favor?" },
            { icone: "🚪", texto: "Posso descer aqui?" },
            { icone: "🙏", texto: "Agradeço pela corrida!" }
        ]
    },

    {
        id: "mercado",
        nome: "Mercado",
        icone: "🛒",
        resumo: "Compras e caixa",
        descricao: "Produtos, preços e pagamento.",
        dica: "",
        frases: [
            { icone: "🔍", texto: "Onde posso encontrar este produto?" },
            { icone: "🏷️", texto: "Pode verificar o preço, por favor?" },
            { icone: "📦", texto: "Tem este produto em estoque?" },
            { icone: "💳", texto: "Aceita cartão?" },
            { icone: "📲", texto: "Aceita Pix?" },
            { icone: "🛍️", texto: "Preciso de uma sacola, por favor." },
            { icone: "🧾", texto: "Pode colocar o CPF na nota?" },
            { icone: "💲", texto: "Pode mostrar o valor total na tela?" }
        ]
    },

    {
        id: "farmacia",
        nome: "Farmácia",
        icone: "💊",
        resumo: "Remédios e receitas",
        descricao: "Receitas, dúvidas sobre remédios e preço.",
        dica: "Se tiver, mostre a receita ou a embalagem do medicamento.",
        frases: [
            { icone: "📄", texto: "Tenho uma receita médica." },
            { icone: "💊", texto: "Preciso deste medicamento. Pode verificar se tem?" },
            { icone: "📝", texto: "Pode escrever como devo tomar este medicamento?" },
            { icone: "⚠️", texto: "Tenho alergia a medicamentos." },
            { icone: "🔁", texto: "Existe uma versão genérica?" },
            { icone: "💲", texto: "Quanto custa?" },
            { icone: "💳", texto: "Aceita cartão ou Pix?" }
        ]
    },

    {
        id: "banco",
        nome: "Banco",
        icone: "🏦",
        resumo: "Saques e pagamentos",
        descricao: "Atendimento, pagamentos e cartão.",
        dica: "Nunca diga nem mostre a sua senha. Se possível, vá acompanhado de uma pessoa de confiança.",
        frases: [
            { icone: "🏦", texto: "Preciso de atendimento, por favor." },
            { icone: "💵", texto: "Quero sacar dinheiro." },
            { icone: "📥", texto: "Quero fazer um depósito." },
            { icone: "🧾", texto: "Quero pagar uma conta." },
            { icone: "🔒", texto: "Preciso bloquear o meu cartão." },
            { icone: "📱", texto: "Preciso de ajuda com o aplicativo do banco." },
            { icone: "👔", texto: "Preciso falar com o gerente." },
            { icone: "✍️", texto: "Pode escrever o valor, por favor?" }
        ]
    },

    {
        id: "restaurante",
        nome: "Restaurante",
        icone: "🍽️",
        resumo: "Pedidos e conta",
        descricao: "Mesa, pedido, alergias e pagamento.",
        dica: "",
        frases: [
            { icone: "🍴", texto: "Quero uma mesa, por favor." },
            { icone: "📋", texto: "Pode trazer o cardápio?" },
            { icone: "🍽️", texto: "Quero fazer o meu pedido." },
            { icone: "⚠️", texto: "Tenho alergia alimentar. Pode verificar os ingredientes?" },
            { icone: "💧", texto: "Uma água, por favor." },
            { icone: "❗", texto: "O meu pedido veio errado. Pode verificar?" },
            { icone: "🧾", texto: "A conta, por favor." },
            { icone: "💳", texto: "Aceita cartão ou Pix?" }
        ]
    },

    {
        id: "onibus",
        nome: "Ônibus",
        icone: "🚌",
        resumo: "Transporte público",
        descricao: "Destino, ponto e passagem.",
        dica: "",
        frases: [
            { icone: "📱", texto: "Vou mostrar o meu destino no celular. Este ônibus passa por lá?" },
            { icone: "🔔", texto: "Pode me avisar quando chegarmos ao meu ponto?" },
            { icone: "🛑", texto: "Pode parar no próximo ponto, por favor?" },
            { icone: "📍", texto: "Onde fica o ponto de ônibus mais próximo?" },
            { icone: "💲", texto: "Quanto custa a passagem?" },
            { icone: "💳", texto: "Como faço para recarregar o cartão?" }
        ]
    },

    {
        id: "lojas",
        nome: "Lojas",
        icone: "🛍️",
        resumo: "Compras e trocas",
        descricao: "Produtos, tamanhos, preço e troca.",
        dica: "",
        frases: [
            { icone: "👀", texto: "Só estou olhando, por enquanto." },
            { icone: "🙋", texto: "Pode me ajudar a encontrar um produto?" },
            { icone: "👕", texto: "Tem este modelo em outro tamanho ou cor?" },
            { icone: "👗", texto: "Onde fica o provador?" },
            { icone: "💲", texto: "Quanto custa?" },
            { icone: "🏷️", texto: "Tem desconto para pagamento à vista?" },
            { icone: "🔁", texto: "Como funciona a troca?" },
            { icone: "🧾", texto: "Preciso da nota fiscal." }
        ]
    }

];


/* =========================================================
   ELEMENTOS
   ========================================================= */

const listaServicosEl = document.getElementById("listaServicos");
const frasesSecaoEl = document.getElementById("frasesSecao");
const servicoIconeEl = document.getElementById("servicoIcone");
const servicoTituloEl = document.getElementById("servicoTitulo");
const servicoDescricaoEl = document.getElementById("servicoDescricao");
const servicoDicaEl = document.getElementById("servicoDica");
const listaFrasesEl = document.getElementById("listaFrases");
const falarAltoEl = document.getElementById("falarAlto");
const vozRotuloEl = document.getElementById("vozRotulo");

const telaEl = document.getElementById("mensagemTela");
const mensagemIconeEl = document.getElementById("mensagemIcone");
const mensagemServicoEl = document.getElementById("mensagemServico");
const mensagemTextoEl = document.getElementById("mensagemExibida");
const btnOuvir = document.getElementById("btnOuvir");
const btnFecharMensagem = document.getElementById("btnFecharMensagem");
const btnVoltarMensagem = document.getElementById("btnVoltarMensagem");


/* =========================================================
   ESTADO
   ========================================================= */

let servicoAtual = SERVICOS[0];
let ultimoCard = null;
const temVoz = "speechSynthesis" in window;


/* =========================================================
   VOZ
   ========================================================= */

function falar(texto) {
    if (!temVoz) return;

    window.speechSynthesis.cancel();

    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    fala.rate = 0.9;
    window.speechSynthesis.speak(fala);
}

function pararFala() {
    if (temVoz) {
        window.speechSynthesis.cancel();
    }
}


/* =========================================================
   SERVIÇOS E FRASES
   ========================================================= */

function renderizarServicos() {
    listaServicosEl.innerHTML = "";

    SERVICOS.forEach(function (servico) {
        const ativo = servico.id === servicoAtual.id;

        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "modo-btn" + (ativo ? " ativo" : "");
        botao.setAttribute("aria-pressed", ativo ? "true" : "false");
        botao.innerHTML =
            '<span class="modo-icone">' + servico.icone + "</span>" +
            "<strong>" + servico.nome + "</strong>" +
            "<small>" + servico.resumo + "</small>";

        botao.addEventListener("click", function () {
            escolherServico(servico);
        });

        listaServicosEl.appendChild(botao);
    });
}

function renderizarFrases() {
    servicoIconeEl.textContent = servicoAtual.icone;
    servicoTituloEl.textContent = servicoAtual.nome;
    servicoDescricaoEl.textContent = servicoAtual.descricao;

    if (servicoAtual.dica) {
        servicoDicaEl.innerHTML = servicoAtual.dica;
        servicoDicaEl.classList.remove("oculto");
    } else {
        servicoDicaEl.classList.add("oculto");
    }

    listaFrasesEl.innerHTML = "";

    servicoAtual.frases.forEach(function (frase) {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "frase-card";
        card.innerHTML =
            "<span>" + frase.icone + "</span>" +
            "<strong>" + frase.texto + "</strong>" +
            "<small>Toque para mostrar</small>";

        card.addEventListener("click", function () {
            abrirMensagem(frase, card);
        });

        listaFrasesEl.appendChild(card);
    });
}

function escolherServico(servico) {
    servicoAtual = servico;
    renderizarServicos();
    renderizarFrases();
    atualizarProximos(false);

    const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    frasesSecaoEl.scrollIntoView({
        behavior: reduzirMovimento ? "auto" : "smooth",
        block: "start"
    });
}


/* =========================================================
   JANELA DA MENSAGEM
   ========================================================= */

function abrirMensagem(frase, card) {
    ultimoCard = card;

    mensagemIconeEl.textContent = frase.icone;
    mensagemServicoEl.textContent = servicoAtual.nome;
    mensagemTextoEl.textContent = frase.texto;

    telaEl.classList.remove("oculto");
    btnFecharMensagem.focus();

    if (falarAltoEl.checked) {
        falar(frase.texto);
    }
}

function fecharMensagem() {
    telaEl.classList.add("oculto");
    pararFala();

    if (ultimoCard) {
        ultimoCard.focus();
    }
}


/* =========================================================
   EVENTOS
   ========================================================= */

btnOuvir.addEventListener("click", function () {
    falar(mensagemTextoEl.textContent);
});

btnFecharMensagem.addEventListener("click", fecharMensagem);
btnVoltarMensagem.addEventListener("click", fecharMensagem);

// Fecha ao clicar no fundo escuro
telaEl.addEventListener("click", function (evento) {
    if (evento.target === telaEl) {
        fecharMensagem();
    }
});

// Fecha com a tecla Esc
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && !telaEl.classList.contains("oculto")) {
        fecharMensagem();
    }
});


/* =========================================================
   PERTO DE VOCÊ
   Usa a localização do aparelho e o mapa colaborativo
   OpenStreetMap (consulta Overpass) para listar lugares
   próximos do serviço escolhido. Não precisa de chave de API.
   ========================================================= */

const ENDPOINTS_OVERPASS = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter"
];
const URL_NOMINATIM = "https://nominatim.openstreetmap.org/reverse";

const MAX_LUGARES = 8;                 // quantos lugares mostrar
const METROS_PARA_ATUALIZAR = 250;     // quanto o aparelho precisa andar para buscar de novo
const SEGUNDOS_ENTRE_BUSCAS = 20;      // intervalo mínimo entre buscas automáticas
const SEGUNDOS_POSICAO_VALIDA = 60;    // quanto tempo uma localização é reaproveitada

// O que buscar em cada serviço (raio em metros).
// "geral" não aparece aqui de propósito: não tem lugares para listar.
const BUSCAS = {
    hospital: {
        titulo: "Hospitais e clínicas",
        termo: "hospital",
        raio: 5000,
        filtros: ['["amenity"~"^(hospital|clinic)$"]']
    },
    aplicativo: {
        titulo: "Uber e 99",
        semLugares: true,
        aviso: "Uber e 99 não têm endereço fixo. Mostre o seu endereço ao motorista ou confirme o ponto de encontro no aplicativo."
    },
    mercado: {
        titulo: "Mercados",
        termo: "supermercado",
        raio: 2500,
        filtros: ['["shop"="supermarket"]']
    },
    farmacia: {
        titulo: "Farmácias",
        termo: "farmácia",
        raio: 2500,
        filtros: ['["amenity"="pharmacy"]']
    },
    banco: {
        titulo: "Bancos",
        termo: "banco",
        raio: 2500,
        filtros: ['["amenity"="bank"]']
    },
    restaurante: {
        titulo: "Restaurantes",
        termo: "restaurante",
        raio: 1200,
        filtros: ['["amenity"="restaurant"]']
    },
    onibus: {
        titulo: "Pontos de ônibus",
        termo: "ponto de ônibus",
        raio: 600,
        filtros: ['["highway"="bus_stop"]', '["amenity"="bus_station"]'],
        aceitaSemNome: true
    },
    lojas: {
        titulo: "Lojas",
        termo: "loja de roupas",
        raio: 1500,
        filtros: ['["shop"~"^(clothes|shoes|department_store|mall)$"]']
    }
};

const ROTULOS = {
    "amenity=hospital": "Hospital",
    "amenity=clinic": "Clínica",
    "amenity=pharmacy": "Farmácia",
    "amenity=bank": "Banco",
    "amenity=restaurant": "Restaurante",
    "amenity=bus_station": "Terminal de ônibus",
    "highway=bus_stop": "Ponto de ônibus",
    "shop=supermarket": "Supermercado",
    "shop=clothes": "Loja de roupas",
    "shop=shoes": "Loja de calçados",
    "shop=department_store": "Loja de departamentos",
    "shop=mall": "Shopping"
};


/* ---------- Elementos ---------- */

const proximosSecaoEl = document.getElementById("proximosSecao");
const proximosTituloEl = document.getElementById("proximosTitulo");
const localAtualEl = document.getElementById("localAtual");
const btnAtualizarLocal = document.getElementById("btnAtualizarLocal");
const btnMostrarLocal = document.getElementById("btnMostrarLocal");
const proximosStatusEl = document.getElementById("proximosStatus");
const listaProximosEl = document.getElementById("listaProximos");
const linkMapasEl = document.getElementById("linkGoogleMaps");


/* ---------- Estado ---------- */

let posicaoAtual = null;     // última localização recebida do aparelho
let posicaoBusca = null;     // localização usada na última busca
let enderecoAtual = "";      // endereço (texto) de onde o aparelho está
let ultimaBuscaHora = 0;
let vigiaId = null;          // acompanhamento do movimento do aparelho
let pedidoId = 0;            // descarta respostas antigas quando o serviço muda


/* ---------- Utilitários ---------- */

function distanciaEmMetros(a, b) {
    const raioTerra = 6371000;
    const rad = Math.PI / 180;
    const dLat = (b.lat - a.lat) * rad;
    const dLon = (b.lon - a.lon) * rad;
    const x =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(a.lat * rad) * Math.cos(b.lat * rad) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * raioTerra * Math.asin(Math.sqrt(x));
}

function formatarDistancia(metros) {
    if (metros < 1000) {
        return Math.max(10, Math.round(metros / 10) * 10) + " m";
    }
    return (metros / 1000).toFixed(1).replace(".", ",").replace(",0", "") + " km";
}

function criarElemento(tag, classe, texto) {
    const elemento = document.createElement(tag);
    if (classe) elemento.className = classe;
    if (texto !== undefined) elemento.textContent = texto;
    return elemento;
}

function definirStatus(texto) {
    proximosStatusEl.textContent = texto;
}

async function buscarJson(url, opcoes, tempoMs) {
    const controle = new AbortController();
    const temporizador = setTimeout(function () {
        controle.abort();
    }, tempoMs);

    try {
        const resposta = await fetch(url, Object.assign({}, opcoes, { signal: controle.signal }));
        if (!resposta.ok) throw new Error("HTTP " + resposta.status);
        return await resposta.json();
    } finally {
        clearTimeout(temporizador);
    }
}


/* ---------- Localização do aparelho ---------- */

function obterPosicao(forcarNova) {
    return new Promise(function (resolve, reject) {
        if (!window.isSecureContext) {
            reject({ codigo: "inseguro" });
            return;
        }
        if (!("geolocation" in navigator)) {
            reject({ codigo: "indisponivel" });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            function (pos) {
                resolve({
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude,
                    precisao: pos.coords.accuracy,
                    hora: Date.now()
                });
            },
            function (erro) {
                reject({ codigo: erro.code === 1 ? "negado" : "falha" });
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: forcarNova ? 0 : 30000
            }
        );
    });
}

function mensagemErroLocal(codigo) {
    if (codigo === "inseguro") {
        return "A localização só funciona em conexão segura (HTTPS) ou em localhost.";
    }
    if (codigo === "negado") {
        return "Permita o acesso à localização no navegador e toque em Atualizar localização.";
    }
    if (codigo === "indisponivel") {
        return "Este navegador não permite obter a localização.";
    }
    return "Não foi possível encontrar a sua localização agora. Toque em Atualizar localização para tentar de novo.";
}

// Acompanha o movimento do aparelho: se a pessoa andar o suficiente,
// a lista é atualizada sozinha.
function iniciarVigia() {
    if (vigiaId !== null || !window.isSecureContext || !("geolocation" in navigator)) return;

    vigiaId = navigator.geolocation.watchPosition(
        function (pos) {
            const nova = {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
                precisao: pos.coords.accuracy,
                hora: Date.now()
            };
            posicaoAtual = nova;

            if (!BUSCAS[servicoAtual.id] || !posicaoBusca) return;

            const andou = distanciaEmMetros(posicaoBusca, nova);
            const limite = Math.max(METROS_PARA_ATUALIZAR, nova.precisao || 0);
            const passouTempo = (Date.now() - ultimaBuscaHora) > SEGUNDOS_ENTRE_BUSCAS * 1000;

            if (andou >= limite && passouTempo) {
                atualizarProximos(false);
            }
        },
        function () {
            // sem permissão ou sem sinal: a lista continua com a última busca
        },
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 30000 }
    );
}

function pararVigia() {
    if (vigiaId !== null) {
        navigator.geolocation.clearWatch(vigiaId);
        vigiaId = null;
    }
}


/* ---------- Endereço de onde a pessoa está ---------- */

async function descobrirEndereco(pos) {
    const url = URL_NOMINATIM +
        "?format=jsonv2&addressdetails=1&zoom=18&accept-language=pt-BR" +
        "&lat=" + pos.lat.toFixed(6) +
        "&lon=" + pos.lon.toFixed(6);

    const dados = await buscarJson(url, {}, 10000);
    const a = dados.address || {};

    const rua = [a.road, a.house_number].filter(Boolean).join(", ");
    const bairro = a.suburb || a.neighbourhood || a.quarter || "";
    const cidade = a.city || a.town || a.village || a.municipality || "";
    const estado = a.state || "";

    return [rua, bairro, cidade, estado].filter(Boolean).join(" - ") || dados.display_name || "";
}

function mostrarEndereco(pos) {
    enderecoAtual = "";
    btnMostrarLocal.classList.add("oculto");

    const aproximada = pos.precisao > 500
        ? " Localização aproximada (margem de " + formatarDistancia(pos.precisao) + ")."
        : "";

    localAtualEl.textContent = "Localização encontrada. Buscando o endereço..." + aproximada;

    descobrirEndereco(pos)
        .then(function (endereco) {
            if (posicaoBusca !== pos) return;
            if (!endereco) throw new Error("sem endereço");

            enderecoAtual = endereco;
            localAtualEl.textContent = "Você está em: " + endereco + "." + aproximada;
            btnMostrarLocal.classList.remove("oculto");
        })
        .catch(function () {
            if (posicaoBusca !== pos) return;
            localAtualEl.textContent =
                "Localização encontrada, mas o endereço não está disponível agora." + aproximada;
        });
}


/* ---------- Lugares próximos (OpenStreetMap / Overpass) ---------- */

async function buscarLugares(busca, pos) {
    const partes = busca.filtros.map(function (filtro) {
        return "nwr" + filtro +
            "(around:" + busca.raio + "," + pos.lat.toFixed(5) + "," + pos.lon.toFixed(5) + ");";
    }).join("");

    const consulta = "[out:json][timeout:20];(" + partes + ");out center tags;";

    let ultimoErro = new Error("sem servidor");

    for (const endereco of ENDPOINTS_OVERPASS) {
        try {
            const dados = await buscarJson(endereco, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
                body: "data=" + encodeURIComponent(consulta)
            }, 25000);

            return dados.elements || [];
        } catch (erro) {
            ultimoErro = erro;
        }
    }

    throw ultimoErro;
}

function rotuloDoTipo(tags) {
    const chaves = ["amenity", "highway", "shop"];

    for (let i = 0; i < chaves.length; i++) {
        const valor = tags[chaves[i]];
        if (valor && ROTULOS[chaves[i] + "=" + valor]) {
            return ROTULOS[chaves[i] + "=" + valor];
        }
    }
    return "";
}

function montarEndereco(tags) {
    const rua = [tags["addr:street"], tags["addr:housenumber"]].filter(Boolean).join(", ");
    const bairro = tags["addr:suburb"] || tags["addr:neighbourhood"] || "";
    const cidade = tags["addr:city"] || "";

    return [rua, bairro, cidade].filter(Boolean).join(" - ");
}

function listarTelefones(tags) {
    const bruto = tags.phone || tags["contact:phone"] || "";

    return bruto
        .split(";")
        .map(function (telefone) { return telefone.trim(); })
        .filter(Boolean)
        .slice(0, 2);
}

function telefoneParaLink(telefone) {
    const limpo = telefone.replace(/[^\d+]/g, "");
    return limpo.replace(/\D/g, "").length >= 8 ? "tel:" + limpo : "";
}

function whatsappParaLink(tags) {
    const bruto = (tags["contact:whatsapp"] || "").split(";")[0];
    let digitos = bruto.replace(/\D/g, "");

    if (digitos.length < 10) return "";
    if (digitos.length <= 11) digitos = "55" + digitos;

    return "https://wa.me/" + digitos;
}

function siteSeguro(tags) {
    const url = (tags.website || tags["contact:website"] || "").trim();
    return /^https?:\/\//i.test(url) ? url : "";
}

function converterElementos(elementos, busca, origem) {
    const candidatos = [];

    elementos.forEach(function (el) {
        const tags = el.tags || {};
        const ponto = el.type === "node" ? { lat: el.lat, lon: el.lon } : el.center;

        if (!ponto || typeof ponto.lat !== "number" || typeof ponto.lon !== "number") return;

        const nomeMapa = (tags.name || "").trim();
        if (!nomeMapa && !busca.aceitaSemNome) return;

        const tipo = rotuloDoTipo(tags);
        const nome = nomeMapa || (tags.ref ? tipo + " " + tags.ref : tipo || "Sem nome");

        candidatos.push({
            nome: nome,
            semNome: !nomeMapa,
            tipo: tipo,
            lat: ponto.lat,
            lon: ponto.lon,
            distancia: distanciaEmMetros(origem, ponto),
            endereco: montarEndereco(tags),
            telefones: listarTelefones(tags),
            whatsapp: whatsappParaLink(tags),
            site: siteSeguro(tags),
            mostrarContato: !busca.aceitaSemNome
        });
    });

    candidatos.sort(function (a, b) {
        return a.distancia - b.distancia;
    });

    // remove duplicados (o mesmo lugar cadastrado duas vezes no mapa)
    const unicos = [];

    candidatos.forEach(function (lugar) {
        const repetido = unicos.some(function (outro) {
            const limite = lugar.semNome ? 10 : 150;
            return outro.nome.toLowerCase() === lugar.nome.toLowerCase() &&
                distanciaEmMetros(outro, lugar) < limite;
        });

        if (!repetido) unicos.push(lugar);
    });

    return unicos;
}


/* ---------- Desenho da lista ---------- */

function criarCardLugar(lugar) {
    const card = criarElemento("article", "lugar-card");
    const info = criarElemento("div", "lugar-info");

    info.appendChild(criarElemento("p", "lugar-nome", lugar.nome));

    const distancia = formatarDistancia(lugar.distancia);
    info.appendChild(criarElemento(
        "p",
        "lugar-meta",
        lugar.tipo ? lugar.tipo + ", a " + distancia + " de você" : "A " + distancia + " de você"
    ));

    info.appendChild(criarElemento(
        "p",
        "lugar-endereco",
        lugar.endereco || "Endereço não cadastrado no mapa. Use Como chegar para ir até o local."
    ));

    const contatos = criarElemento("div", "lugar-contatos");
    let totalContatos = 0;

    lugar.telefones.forEach(function (telefone) {
        const href = telefoneParaLink(telefone);

        if (href) {
            const link = criarElemento("a", "", "📞 " + telefone);
            link.href = href;
            contatos.appendChild(link);
        } else {
            contatos.appendChild(criarElemento("span", "", "📞 " + telefone));
        }
        totalContatos++;
    });

    if (lugar.whatsapp) {
        const link = criarElemento("a", "", "💬 WhatsApp");
        link.href = lugar.whatsapp;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        contatos.appendChild(link);
        totalContatos++;
    }

    if (lugar.site) {
        const link = criarElemento("a", "", "🌐 Site");
        link.href = lugar.site;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        contatos.appendChild(link);
        totalContatos++;
    }

    if (totalContatos === 0 && lugar.mostrarContato) {
        contatos.appendChild(criarElemento("span", "sem-contato", "Telefone não cadastrado no mapa."));
        totalContatos++;
    }

    if (totalContatos > 0) {
        info.appendChild(contatos);
    }

    const acoes = criarElemento("div", "lugar-acoes");

    const rota = criarElemento("a", "btn-lugar primario", "Como chegar");
    rota.href = "https://www.google.com/maps/dir/?api=1&destination=" +
        lugar.lat.toFixed(6) + "," + lugar.lon.toFixed(6);
    rota.target = "_blank";
    rota.rel = "noopener noreferrer";
    acoes.appendChild(rota);

    const mostrar = criarElemento("button", "btn-lugar", "Mostrar na tela");
    mostrar.type = "button";
    mostrar.addEventListener("click", function () {
        const texto = lugar.endereco ? lugar.nome + ". " + lugar.endereco : lugar.nome;
        abrirMensagem({ icone: "📍", texto: texto }, mostrar);
    });
    acoes.appendChild(mostrar);

    card.appendChild(info);
    card.appendChild(acoes);

    return card;
}

function renderizarLugares(lugares) {
    listaProximosEl.innerHTML = "";

    lugares.forEach(function (lugar) {
        listaProximosEl.appendChild(criarCardLugar(lugar));
    });
}

function mostrarLinkMapas(busca) {
    if (!busca.termo) {
        linkMapasEl.classList.add("oculto");
        return;
    }

    let url = "https://www.google.com/maps/search/" + encodeURIComponent(busca.termo);

    if (posicaoAtual) {
        url += "/@" + posicaoAtual.lat.toFixed(5) + "," + posicaoAtual.lon.toFixed(5) + ",15z";
    }

    linkMapasEl.href = url;
    linkMapasEl.classList.remove("oculto");
}


/* ---------- Fluxo principal ---------- */

async function atualizarProximos(forcarLocal) {
    const busca = BUSCAS[servicoAtual.id];
    const meuPedido = ++pedidoId;

    listaProximosEl.innerHTML = "";

    if (!busca) {
        proximosSecaoEl.classList.add("oculto");
        pararVigia();
        return;
    }

    proximosSecaoEl.classList.remove("oculto");
    proximosTituloEl.textContent = busca.semLugares ? "Seu local" : busca.titulo + " perto de você";
    linkMapasEl.classList.add("oculto");

    // 1. Onde está o aparelho?
    const validade = SEGUNDOS_POSICAO_VALIDA * 1000;
    const precisaNova = forcarLocal || !posicaoAtual || (Date.now() - posicaoAtual.hora) > validade;

    if (precisaNova) {
        definirStatus("Procurando a sua localização...");

        try {
            const nova = await obterPosicao(forcarLocal);
            if (meuPedido !== pedidoId) return;
            posicaoAtual = nova;
        } catch (erro) {
            if (meuPedido !== pedidoId) return;
            definirStatus(mensagemErroLocal(erro && erro.codigo));
            mostrarLinkMapas(busca);
            return;
        }
    }

    const pos = posicaoAtual;
    posicaoBusca = pos;
    ultimaBuscaHora = Date.now();

    iniciarVigia();
    mostrarEndereco(pos);
    mostrarLinkMapas(busca);

    if (busca.semLugares) {
        definirStatus(busca.aviso);
        return;
    }

    // 2. Quais lugares existem por perto?
    definirStatus("Buscando " + busca.titulo.toLowerCase() + " perto de você...");

    try {
        const elementos = await buscarLugares(busca, pos);
        if (meuPedido !== pedidoId) return;

        const lugares = converterElementos(elementos, busca, pos).slice(0, MAX_LUGARES);

        if (lugares.length === 0) {
            definirStatus(
                "Não encontramos " + busca.titulo.toLowerCase() + " no mapa em até " +
                formatarDistancia(busca.raio) + ". Tente o Google Maps."
            );
            return;
        }

        definirStatus(
            lugares.length + (lugares.length === 1 ? " resultado" : " resultados") +
            ", do mais próximo ao mais distante."
        );
        renderizarLugares(lugares);
    } catch (erro) {
        if (meuPedido !== pedidoId) return;
        definirStatus("Não foi possível buscar agora. Verifique a internet e toque em Atualizar localização.");
    }
}


/* ---------- Eventos ---------- */

btnAtualizarLocal.addEventListener("click", function () {
    atualizarProximos(true);
});

btnMostrarLocal.addEventListener("click", function () {
    if (!enderecoAtual) return;
    abrirMensagem({ icone: "📍", texto: "Estou aqui: " + enderecoAtual + "." }, btnMostrarLocal);
});


/* =========================================================
   INÍCIO
   ========================================================= */

// Se o navegador não tiver voz, esconde as opções de áudio
if (!temVoz) {
    vozRotuloEl.classList.add("oculto");
    btnOuvir.classList.add("oculto");
}

renderizarServicos();
renderizarFrases();
atualizarProximos(false);