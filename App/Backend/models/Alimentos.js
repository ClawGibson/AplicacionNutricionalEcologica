const { Schema, model } = require("mongoose");

const alimentosSchema = new Schema({
    nombreAlimento: { type: String, required: true },
    imagen: { type: String, required: false },
    grupoExportable: { type: String, required: false },
    subGrupoExportable: { type: String, required: false },
    clasificacionExportable: { type: String, required: false },
    grupoAlimento: { type: String, required: true },
    mensaje: [{
        nutricional: { type: String, required: false },
        ambiental: { type: String, required: false }
    }],
    icono: [{
        iconoNutricional: { type: String, required: false },
        iconoAmbiental: { type: String, required: false }
    }],
    opcionesPreparacion: { type: String, required: false },
    cantidadAlimento: [{
        cantidadSugerida: { Number, required: false },
        unidad: { type: String, required: false },
        pesoNeto: { type: String, required: false }
    }],
    caloriasMacronutrientes: [{
        energia: { type: String, required: false },
        proteina: { type: String, required: false },
        lipidos: { type: String, required: false },
        agSaturados: { type: String, required: false },
        agMonoinsaturados: { type: String, required: false },
        adPoliinsaturados: { type: String, required: false },
        colesterol: { type: String, required: false },
        omega3: { type: String, required: false },
        omega6: { type: String, required: false },
        omega9: { type: String, required: false },
        hidratosDeCarbono: { type: String, required: false },
        fibra: { type: String, required: false },
        fibraInsoluble: { type: String, required: false },
        azucar: { type: String, required: false },
        etanol: { type: String, required: false }
    }],
    vitaminas: [{
        tiamina: { type: String, required: false },
        riboflavin: { type: String, required: false },
        niacina: { type: String, required: false },
        acidoPantotenico: { type: String, required: false },
        pridoxina: { type: String, required: false },
        biotina: { type: String, required: false },
        cobalmina: { type: String, required: false },
        acidoAscorbico: { type: String, required: false },
        acidoFolico: { type: String, required: false },
        vitaminaA: { type: String, required: false },
        vitaminaD: { type: String, required: false },
        vitaminaK: { type: String, required: false },
        vitaminaE: { type: String, required: false }
    }],
    minerales: [{
        calcio: { type: String, required: false },
        fosforo: { type: String, required: false },
        hierro: { type: String, required: false },
        hierroNoHem: { type: String, required: false },
        hierroTotal: { type: String, required: false },
        magnesio: { type: String, required: false },
        sodio: { type: String, required: false },
        potasio: { type: String, required: false },
        zing: { type: String, required: false },
        selenio: { type: String, required: false }
    }],
    aspectoGlucemico: [{
        indiceGlicemico: { type: String, required: false },
        cargaGlicemica: { type: String, required: false }
    }],
    aspectoMedioambiental: [{
        factorDeCorreccionParaHuellaHidricaYEGEI: { Number, required: false },
        tipo: { type: String, required: false },
        lugar: { type: String, required: false },
        huellaHidricaTotal: { type: String, required: false },
        huellaHidricaVerde: { type: String, required: false },
        huellaHidricaAzul: { type: String, required: false },
        huellaHidricaGris: { type: String, required: false },
        aguaParaLavado: { type: String, required: false },
        aguaParaCoccion: { type: String, required: false },
        lugarEGEI: { type: String, required: false },
        citaEGEI: { type: String, required: false },
        EGEI: { type: String, required: false },
        huellaEcologica: { type: String, required: false },
        usoDeSuelo: { type: String, required: false },
        nitrogeno: { type: String, required: false },
        fosforo: { type: String, required: false },
        puntajeEcologico: { Number, required: false }
    }],
    aspectoEconomico: [{
        precio: { Number, required: false },
        lugarDeCompra: { type: String, required: false },
        lugarDeVenta: { type: String, required: false }
    }],
    componentesBioactivos: [{
        fitoquimicos: { type: String, required: false },
        polifenoles: { type: String, required: false },
        antocianinas: { type: String, required: false },
        taninos: { type: String, required: false },
        isoflavonas: { type: String, required: false },
        resveratrol: { type: String, required: false },
        isotiocinatos: { type: String, required: false },
        caretenoides: { type: String, required: false },
        betacarotenos: { type: String, required: false },
        licopeno: { type: String, required: false },
        luteina: { type: String, required: false },
        alicina: { type: String, required: false },
        cafeina: { type: String, required: false },
        UFC: { type: String, required: false }
    }],
    aditivosAlimentarios: [{
        benzoatoDeSodio: { type: String, required: false },
        polisorbato: { type: String, required: false },
        azulBrillanteFCFoE133: { type: String, required: false },
        azurrubinaOE102: { type: String, required: false },
        amarilloOcasoFDFoE110: { type: String, required: false },
        tartrazinaOE102: { type: String, required: false },
        verdeSoE142: { type: String, required: false },
        negroBrillanteBNoE151: { type: String, required: false },
        sucralosa: { type: String, required: false },
        estevia: { type: String, required: false },
        sacarina: { type: String, required: false },
        aspartame: { type: String, required: false },
        acesulfameK: { type: String, required: false },
        carboxymethylcellulose: { type: String, required: false },
        dioxidoDeTitanio: { type: String, required: false },
        monolauratoDeGlicerol: { type: String, required: false }
    }],
    atributosAdicionales: [{
        atributoAdicional: { type: String, required: false },
    }],
    marca: { type: String, required: false }
}, {
    timestamps: true
});

alimentosSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

alimentosSchema.set('toJSON', {
    virtuals: true
});

module.exports = model('Alimentos', alimentosSchema);