const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/pilingorp")
.then(() => console.log("✅ Base de datos conectada"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("🚀 PILINGO RP API funcionando");
});

app.listen(3000, () => {
    console.log("🌐 Servidor iniciado en http://localhost:3000");
});
