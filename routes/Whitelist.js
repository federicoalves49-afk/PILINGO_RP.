const express = require("express");
const router = express.Router();
const Whitelist = require("../models/Whitelist");

// Obtener todas las solicitudes
router.get("/", async (req, res) => {
    try {
        const solicitudes = await Whitelist.find().sort({ fecha: -1 });
        res.json(solicitudes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear solicitud
router.post("/", async (req, res) => {
    try {
        const solicitud = new Whitelist(req.body);
        await solicitud.save();
        res.status(201).json(solicitud);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Aprobar solicitud
router.put("/:id/aprobar", async (req, res) => {
    try {
        await Whitelist.findByIdAndUpdate(req.params.id, {
            estado: "Aprobada"
        });

        res.json({ mensaje: "Solicitud aprobada." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rechazar solicitud
router.put("/:id/rechazar", async (req, res) => {
    try {
        await Whitelist.findByIdAndUpdate(req.params.id, {
            estado: "Rechazada"
        });

        res.json({ mensaje: "Solicitud rechazada." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
