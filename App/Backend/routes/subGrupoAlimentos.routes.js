const subGrupo = require('../models/SubGrupoAlimentos')
const express = require('express')
const router = express.Router();

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

module.exports = router;