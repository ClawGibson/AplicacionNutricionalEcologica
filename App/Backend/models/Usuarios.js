const mongoose = require("mongoose");

const usuariosSchema = new mongoose.Schema({
    logros: { type: String, required: false },
    nombre: { type: String, required: true },
    foto: { type: String, required: false },
    email: { type: String, required: true },
    fechaDeNacimiento: { type: String, required: true },
    contrasena: { type: String, required: true },
    genero: { type: String, required: true },
    peso: [Number],
    altura: { type: Number, required: true },
    actividadFisica: { type: String, required: true },
    historiaClinica: {
        antecedentesPatologicos: [String],
        antecedentesHeredoFamiliares: [String],
        medicamentos: [String]
    },
    nivelSocioeconomico: {
        ingresos: { type: String, required: false },
        educacion: { type: String, required: false },
        ocupacion: { type: String, required: false }
    },
    comidaFavorita: [String],
    comidaNoFavorita: [String],
    alergiasAlimentarias: [String],
    meta: { type: String, required: false },
    esAdmin: { type: Boolean, default: false },
    extras: [String],
    desayuno: [String],
    colacion1: [String],
    comida: [String],
    colacion2: [String],
    cena: [String],
    desayunoAyer: [String],
    colacion1Ayer: [String],
    comidaAyer: [String],
    colacion2Ayer: [String],
    cenaAyer: [String]
}, {
    timestamps: true
});

usuariosSchema.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    const { _id: id, ...result } = object;
    return { ...result, id };
});

exports.Usuarios = mongoose.model('Usuarios', usuariosSchema);
exports.usuariosSchema = usuariosSchema;