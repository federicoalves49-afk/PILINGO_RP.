const mongoose = require("mongoose");

const whitelistSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    discord: {
        type: String,
        required: true
    },
    steam: {
        type: String,
        required: true
    },
    personaje: {
        type: String,
        required: true
    },
    historia: {
        type: String,
        required: true
    },
    rdm: String,
    vdm: String,
    metagaming: String,
    powergaming: String,
    estado: {
        type: String,
        default: "Pendiente"
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Whitelist", whitelistSchema);
