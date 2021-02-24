const Alimentos = require('../models/Alimentos')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {

    const alimentosLista = await Alimentos.find();

    if (!alimentosLista) {
        res.status(500).json({ success: false });
    }
    res.send(alimentosLista);
});

router.post('/', (req, res) => {

    const alimento = new Alimentos({
        nombreAlimento: req.body.nombreAlimento,
        imagen: req.body.imagen,
        grupoExportable: req.body.grupoExportable,
        subGrupoExportable: req.body.subGrupoExportable,
        clasificacionExportable: req.body.clasificacionExportable,
        grupoAlimento: req.body.grupoAlimento,
        mensaje: req.body.mensaje,
        icono: req.body.icono,
        opcionesPreparacion: req.body.opcionesPreparacion,
        cantidadAlimento: req.body.cantidadAlimento,
        caloriasMacronutrientes: req.body.caloriasMacronutrientes,
        vitaminas: req.body.vitaminas,
        minerales: req.body.minerales,
        aspectoGlucemico: req.body.aspectoGlucemico,
        aspectoMedioambiental: req.body.aspectoMedioambiental,
        aspectoEconomico: req.body.aspectoEconomico,
        componentesBioactivos: req.body.componentesBioactivos,
        aditivosAlimentarios: req.body.aditivosAlimentarios,
        atributosAdicionales: req.body.atributosAdicionales,
        marca: req.body.marca
    });

    alimento.save()
        .then((alimentoCreado => {
            res.status(201).json(alimentoCreado);
        }))
        .catch((err) => {
            res.status(500).json({ error: err, success: false })
        })
});

module.exports = router;