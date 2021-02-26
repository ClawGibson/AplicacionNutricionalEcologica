const { Schema, model } = require('mongoose');

const subGrupoAlimentosSchema = new Schema({
    subGrupoDeAlimento: { type: String, required: true }
});

subGrupoAlimentosSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

subGrupoAlimentosSchema.set('toJSON', {
    virtuals: true
});

module.exports = model('subGrupoAlimentos', subGrupoAlimentosSchema);