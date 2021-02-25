const Recetas = require('../models/Recetas')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

router.get('/', async (req, res) => {
    const recetas = await Recetas.find();

    if (!recetas)
        res.status(500).json({ success: false });

    res.send(recetas);
});

router.get('/destacadas/:count', async (req, res) => {
    const count = req.params.count ? req.params.count : 0
    const recetas = await Recetas.find({ destacado: true }).limit(+count);

    if (!recetas)
        res.status(500).json({ success: false });

    res.send(recetas);
});

router.post('/', async (req, res) => {
    let receta = new Recetas({
        titulo: req.body.titulo,
        categoria: req.body.categoria,
        url: req.body.url,
        ingredientes: req.body.ingredientes,
        preparacion: req.body.preparacion,
        destacado: req.body.destacado
    });

    receta = await receta.save();

    if (!receta)
        return res.status(400).send('No se pudo crear la receta :c');

    res.send(receta);
});

router.put('/:id', async (req, res) => {

    const recetaEditar = await Recetas.findOneAndUpdate(req.params.id, {
        titulo: req.body.titulo,
        categoria: req.body.categoria,
        url: req.body.url,
        ingredientes: req.body.ingredientes,
        preparacion: req.body.preparacion,
        destacado: req.body.destacado
    }, {
        new: true
    });

    recetaEditar = await recetaEditar.save();

    if (!recetaEditar)
        return res.status(404).send('No se encontró o no se pudo editar la receta :c');

    res.send(recetaEditar);
});

router.delete('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send('El ID de la receta no es válido.');

    const receta = await Recetas.findByIdAndRemove(req.params.id);

    if (!receta)
        return res.status(400).send('No se encontró el receta a eliminar :c');

    res.status(200).send('Receta eliminada :D!');
});

module.exports = router;