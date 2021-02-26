const subGrupo = require('../models/SubGrupoAlimentos')
const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    const subGruposDeAlimentos = await subGrupo.find();

    if (!subGruposDeAlimentos)
        res.status(500).json({ success: false });

    res.send(subGruposDeAlimentos);

});

router.post('/', async (req, res) => {
    let nuevoSubGrupo = new subGrupo({
        subGrupoDeAlimento: req.body.subGrupoDeAlimento
    });

    nuevoSubGrupo = await nuevoSubGrupo.save();

    if (!nuevoSubGrupo)
        return res.status(400).send('No se pudo actualizar el alimento :c');

    res.send(nuevoSubGrupo);
});

router.put('/:id', async (req, res) => {

    const nuevoSubGrupo = await subGrupo.findOneAndUpdate(req.params.id, {
        subGrupoDeAlimento: req.body.subGrupoDeAlimento
    }, {
        new: true
    });

    if (!nuevoSubGrupo)
        return res.status(404).send('El sub grupo no se encontró o no se pudo editar :c');

    res.status(200).send(nuevoSubGrupo);
});

router.delete('/:id', async (req, res) => {

    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send('El ID del sub grupo no es válido.');

    const subGrupo = await nuevoSubGrupo.findByIdAndRemove(req.params.id);

    if (!subGrupo)
        return res.status(400).send('No se encontró el sub grupo a eliminar :c');

    res.status(200).send('Sub grupo eliminado :D!');
});

module.exports = router;