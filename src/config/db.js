const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/livraria")
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((erro) => console.error("Erro ao conectar ao MongoDB:", erro));