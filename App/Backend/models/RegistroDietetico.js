const { Schema, model } = require("mongoose");

const registroDieteticoSchema = new Schema({
  idUsuario: { type: Schema.Types.ObjectId, ref: "usuario", required: true },
  agua: { type: Number, required: false },
  ejercicio: [
    {
      duracion: { type: Number, required: false },
      intensidad: { type: Number, required: false },
    },
  ],
  alimentos: [
    {
      idAlimento: {
        type: Schema.Types.ObjectId,
        ref: "nombreAlimento",
        required: false,
      },
      cantidad: { type: String, required: false },
      tipo: { type: String, required: false },
    },
  ],
});

registroDieteticoSchema.virtual("id").get(() => {
  return this._id.toHexString();
});

registroDieteticoSchema.set("toJSON", {
  virtuals: true,
});

module.exports = model("RegistroDietetico", registroDieteticoSchema);
