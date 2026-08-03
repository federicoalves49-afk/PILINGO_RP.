const express = require("express");
const router = express.Router();
const Whitelist = require("../models/Whitelist");

// Guardar una solicitud
router.post("/", async (req, res) => {
    try {
        const nuevaSolicitud = new Whitelist(req.body);
        await nuevaSolicitud.save();

        res.status(201).json({
            mensaje: "Solicitud enviada correctamente."
        });
    } catch (error) {
        res.status(500).json({
            error: "No se pudo guardar la solicitud."
        });
    }
});

// Obtener todas las solicitudes
router.get("/", async (req, res) => {
    const solicitudes = await Whitelist.find();
    res.json(solicitudes);
});

module.exports = router;
