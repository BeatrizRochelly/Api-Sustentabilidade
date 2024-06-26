import express from "express";
import conectaNaDataNase from "./config/dbConnect.js";
import routes from "./routes/index.js";
//import { get } from "mongoose";

const conexao = await conectaNaDataNase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();
routes(app);

export default app;
