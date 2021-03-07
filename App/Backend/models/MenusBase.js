const { Schema, model, mongo } = require('mongoose');

const menusBaseSchema = new Schema({
    titulo: { type: String, required: true },
    imagen: { type: String, required: false },
    ingredientes: [String],
    categoria: { type: String, required: true }
});

menusBaseSchema.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    const { _id: id, ...result } = object;
    return { ...result, id };
});

module.exports = model('MenusBase', menusBaseSchema);