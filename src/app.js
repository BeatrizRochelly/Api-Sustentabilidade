import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: "Sustentabilidade é importante"
    },
    {
        id: 2,
        titulo: "Meio ambiente"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Sustentabilidade");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

export default app;
