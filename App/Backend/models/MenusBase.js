const { Schema, model, mongo } = require('mongoose');

const menusBaseSchema = new Schema({
    titulo: { type: String, required: true },
    imagen: { type: String, required: false },
    ingredientes: [{
        alimento: { type: String, required: true },
        cantidad: { type: Number, required: true }
    }],
    categoria: { type: String, required: true }
});

menusBaseSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

menusBaseSchema.set('toJSON', {
    virtuals: true
});

module.exports = model('MenusBase', menusBaseSchema);