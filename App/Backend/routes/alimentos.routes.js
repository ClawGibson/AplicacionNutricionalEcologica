const GrupoAlimento = require('../models/GrupoAlimentos');
const Alimentos = require('../models/Alimentos')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');

router.get('/all/', async (req, res) => {

    const alimentosLista = await Alimentos.find();

    if (!alimentosLista)
        res.status(500).json({ success: false });

    res.send(alimentosLista);
});

router.get('/:id', async (req, res) => {

    const alimento = await Alimentos.findById(req.params.id);

    if (!alimento)
        res.status(500).json({ succes: false, message: 'No existe ese alimento :/' });

    res.send(alimento);
});

router.get('/', async (req, res) => {
    const alimento = await Alimentos.find().select('nombreAlimento imagen grupoAlimento');

    if (!alimento)
        res.status(500).json({ success: false, message: 'No hay alimentos todavía :c' });

    res.send(alimento);
});

router.post('/', async (req, res) => {

    const grupoAlimento = await GrupoAlimento.findById(req.body.grupoAlimento);
    if (!grupoAlimento)
        return res.status(400).send('Grupo de alimento inválido');

    let alimento = new Alimentos({
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

    alimento = await alimento.save();

    if (!alimento)
        return res.status(400).send('No se pudo crear el alimento :c');

    res.send(alimento);
});

router.put('/:id', async (req, res) => {

    const alimentoEditar = await Alimentos.findOneAndUpdate(req.params.id, {
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
    }, {
        new: true // Return the new product.
    });

    if (!alimentoEditar)
        return res.status(404).send('El producto no se encontró o no se pudo editar :c');

    res.status(200).send(alimentoEditar);
});

router.delete('/:id', async (req, res) => {

    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send('El ID del alimento no es válido.');

    const alimento = await Alimentos.findByIdAndRemove(req.params.id);

    if (!alimento)
        return res.status(400).send('No se encontró el alimento a eliminar :c');

    res.status(200).send('Alimento eliminado :D!');
});

module.exports = router;