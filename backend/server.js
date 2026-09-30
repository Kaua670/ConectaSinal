const express = require("express");
const cors = require("cors");

const app = express();

const PORTA = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Servidor do ConectaSinal funcionando!");
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});

app.get("/api/frases", (req, res) => {

    const frases = [
        {
            id: 1,
            frase: "Olá",
            categoria: "cotidiano",
            video: "ola.mp4"
        },
        {
            id: 2,
            frase: "Obrigado",
            categoria: "cotidiano",
            video: "obrigado.mp4"
        },
        {
            id: 3,
            frase: "Como você está?",
            categoria: "cotidiano",
            video: "como-esta.mp4"
        },
        {
            id: 4,
            frase: "Preciso de ajuda",
            categoria: "emergencia",
            video: "ajuda.mp4"
        },
        {
            id: 5,
            frase: "Preciso de um médico",
            categoria: "saude",
            video: "medico.mp4"
        }
    ];

    res.json(frases);
});