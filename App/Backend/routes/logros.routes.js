const Logros = require('../models/Logros');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const listaLogros = await Logros.find();

  !listaLogros
    ? res.status(500).json({ success: false })
    : res.send(listaLogros);
});

router.get('/:id', async (req, res) => {
  const logroInd = await Logros.findById(req.params.id);

  !logroInd
    ? res.status(500).json({
        success: false,
        message: 'No se encontró el logro que buscaba',
      })
    : res.send(logroInd);
});

router.post('/', async (req, res) => {
  const nameExiste = await Logros.findOne(req.body.logro);
  nameExiste
    ? res
        .status(500)
        .json({ succes: false, message: 'El nombre de este logro ya existe' })
    : null;

  const logroExiste = await Logros.findById(req.body.logroRequerido);
  logroExiste
    ? res.status(500).json({ succes: false, message: 'Este logro ya existe' })
    : null;

  const nuevoLogro = new Logro({
    logro: req.body.logro,
    fotoLogro: req.body.fotoLogro,
    puntosNecesarios: req.body.puntosNecesarios,
    logroRequerido: req.body.logroRequerido,
  });

  nuevoLogro = await nuevoLogro.save();

  !nuevoLogro
    ? res.status(400).send('No se pudo crear el nuevo logro')
    : res.send(nuevoLogro);
});

router.put('/:id', async (req, res) => {
  const logroExiste = await Logros.findById(req.params.id);

  logroExiste
    ? null
    : res.status(500).json({
        succes: false,
        message: 'El logro que está buscando no existe :c',
      });

  let logroActualizado = await Logros.findByIdAndUpdate(
    req.params.id,
    {
      logro: req.body.logro,
      fotoLogro: req.body.fotoLogro,
      puntosNecesarios: req.body.puntosNecesarios,
      logroRequerido: req.body.logroRequerido,
    },
    {
      new: true,
    }
  );

  logroActualizado = await logroActualizado.save();

  !logroActualizado
    ? res.status(400).send('No se pudo actualizar el logro :c')
    : res.send(logroActualizado);
});

router.delete('/:id', async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).send('El ID del logro no es válido.');

  const logro = await Logros.findByIdAndRemove(req.params.id);

  if (!logro)
    return res.status(400).send('No se encontró el logro a eliminar :c');

  res.status(200).send('Logro eliminado :D!');
});

module.exports = router;
