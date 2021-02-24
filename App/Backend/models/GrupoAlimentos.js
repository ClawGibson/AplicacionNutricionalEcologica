const { Schema, model } = require('mongoose');

const grupoAlimentosSchema = new Schema({
    grupoDeAlimento: { type: String, required: true }
});

module.exports = model('grupoAlimentos', grupoAlimentosSchema);