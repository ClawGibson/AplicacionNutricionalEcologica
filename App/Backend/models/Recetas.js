const { Schema, model } = require("mongoose");

const recetasSchema = new Schema({
    titulo: { type: String, required: true },
    categoria: { type: String, required: true },
    url: { type: String, required: false },
    ingredientes: { type: String, required: false },
    preparacion: { type: String, required: false },
    destacado: { type: Boolean, required: true }
}, {
    timestamps: true
});

module.exports = model('Recetas', recetasSchema);