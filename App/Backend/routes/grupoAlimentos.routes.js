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

router.post('/', (req, res) => {
    const nuevoGrupo = new grupo({
        grupoDeAlimento: req.body.grupoDeAlimento
    });

    nuevoGrupo.save()
        .then((grupoCreado => {
            res.status(201).json(grupoCreado);
        }))
        .catch((err) => {
            res.status(500).json({ error: err, success: false });
        })
});

module.exports = router;