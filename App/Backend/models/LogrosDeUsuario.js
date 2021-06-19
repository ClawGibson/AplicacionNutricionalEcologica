const { Schema, model } = require('mongoose');

const logrosDeUsuarioSchema = new Schema({
  logro: { type: Schema.Types.ObjectId, ref: 'Logros', required: false },
  usuario: { type: Schema.Types.ObjectId, ref: 'Usuarios', required: true },
});

logrosDeUsuarioSchema.virtual('id').get(() => {
  return this._id.toHexString();
});

logrosDeUsuarioSchema.set('toJSON', {
  virtuals: true,
});

module.exports = model('LogrosDeUsuario', logrosDeUsuarioSchema);
