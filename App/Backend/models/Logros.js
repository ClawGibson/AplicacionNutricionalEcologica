const { Schema, model } = require('mongoose');

const logrosSchema = new Schema({
  logro: { type: String, required: true },
  fotoLogro: { type: String, required: false },
  puntosNecesarios: { type: Number, required: true },
  logroRequerido: {
    type: Schema.Types.ObjectId,
    ref: 'Logros',
    required: false,
  },
});

logrosSchema.virtual('id').get(() => {
  return this._id.toHexString();
});

logrosSchema.set('toJSON', {
  virtuals: true,
});

module.exports = model('Logros', logrosSchema);
