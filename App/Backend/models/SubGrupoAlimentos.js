const { Schema, model } = require('mongoose');

const subGrupoAlimentosSchema = new Schema({
    subGrupoDeAlimento: { type: String, required: true }
});

module.exports = model('subGrupoAlimentos', subGrupoAlimentosSchema);