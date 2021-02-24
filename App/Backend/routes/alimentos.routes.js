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

router.get('/:id', async (req, res) => {

    const alimento = await Alimentos.findById(req.params.id);

    if (!alimento) {
        res.status(500).json({ succes: false, message: 'No existe ese alimento :/' });
    } else {
        res.send(alimento);
    }

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
        new: true
    });

    if (!alimentoEditar) {
        return res.status(404).send('El producto no se encontró o no se pudo editar :c');
    } else {
        res.status(200).send(alimentoEditar);
    }

});

router.delete('/:id', (req, res) => {
    Alimentos.findByIdAndRemove(req.params.id)
        .then(alimento => {
            if (alimento) {
                return res.status(200).json({ success: true, message: 'Alimento eliminado :D' });
            } else {
                return res.status(404).json({ success: true, message: 'Alimento no encontrado :/' });
            }
        })
        .catch(err => {
            return res.status(400).json({ succes: false, error: err });
        });
});

module.exports = router;