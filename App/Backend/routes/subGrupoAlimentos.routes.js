const subGrupo = require('../models/SubGrupoAlimentos')
const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
    const subGruposDeAlimentos = await subGrupo.find();

    if (!subGruposDeAlimentos) {
        res.status(500).json({ success: false });
    }
    res.send(subGruposDeAlimentos);

});

router.post('/', (req, res) => {
    const nuevoSubGrupo = new subGrupo({
        subGrupoDeAlimento: req.body.subGrupoDeAlimento
    });

    nuevoSubGrupo.save()
        .then((subGrupoCreado => {
            res.status(201).json(subGrupoCreado);
        }))
        .catch((err) => {
            res.status(500).json({ error: err, success: false });
        })
});

module.exports = router;