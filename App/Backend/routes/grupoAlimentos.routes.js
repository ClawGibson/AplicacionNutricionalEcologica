const grupo = require('../models/GrupoAlimentos')
const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
    const gruposDeAlimentos = await grupo.find();

    if (!gruposDeAlimentos) {
        res.status(500).json({ success: false });
    }
    res.send(gruposDeAlimentos);

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

module.exports = router;