const grupo = require('../models/GrupoAlimentos')
const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    const gruposDeAlimentos = await grupo.find();

    if (!gruposDeAlimentos) {
        res.status(500).json({ success: false });
    }
    res.send(gruposDeAlimentos);

});

router.get('/:id', async (req, res) => {
    const grupoDeAlimento = await grupo.findById(req.params.id);

    if (!grupoDeAlimento)
        return res.status(500).json({ success: false });

    res.send(grupoDeAlimento)
});

router.post('/', async (req, res) => {
    let nuevoGrupo = new grupo({
        grupoDeAlimento: req.body.grupoDeAlimento
    });

    nuevoGrupo = await nuevoGrupo.save();

    if (!nuevoGrupo)
        return res.status(400).send('No se pudo crear el grupo :c')

    res.status(200).send(nuevoGrupo);
});

router.put('/:id', async (req, res) => {

    const nuevoGrupo = await grupo.findOneAndUpdate(req.params.id, {
        grupoDeAlimento: req.body.grupoDeAlimento
    }, {
        new: true
    });

    if (!nuevoGrupo)
        return res.status(404).send('El grupo no se encontró o no se pudo editar :c');

    res.status(200).send(nuevoGrupo);
});

router.delete('/:id', async (req, res) => {

    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send('El ID del sub grupo no es válido.');

    const nuevoGrupo = await nuevoGrupo.findByIdAndRemove(req.params.id);

    if (!nuevoGrupo)
        return res.status(400).send('No se encontró el grupo a eliminar :c');

    res.status(200).send('Grupo eliminado :D!');
});
module.exports = router;