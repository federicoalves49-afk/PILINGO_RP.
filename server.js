const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const whitelistRoutes = require("./routes/whitelist");

const app = express();

// Configuración
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Rutas
app.use("/api/whitelist", whitelistRoutes);

// Conexión a MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/pilingorp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("✅ Base de datos conectada correctamente.");
})
.catch((error) => {
    console.error("❌ Error al conectar con MongoDB:", error);
});

// Ruta principal
app.get("/", (req, res) => {
    res.send("🚀 API de PILINGO RP funcionando correctamente.");
});

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🌐 Servidor iniciado en http://localhost:${PORT}`);
});
