const LogrosDeUsuario = require("../models/LogrosDeUsuario");
const Logros = require("../models/Logros");
const express = require("express");
const router = expres.Router();

router.get("/", async (req, res) => {
  const listaLogros = await LogrosDeUsuario.find();

  !listaLogros
    ? res.status(500).json({ success: false })
    : res.send(listaLogros);
});

router.post("/", async (req, res) => {
  const logroExiste = await Logros.findOne(req.body.logro);

  logroExiste
    ? null
    : res.status(500).json({ succes: false, message: "Este logro no existe" });

  const logroDeUsuario = new logroDeUsuario({
    logo: req.body.logro,
    usuario: req.body.usuario,
  });

  logroDeUsuario = await logroDeUsuario.save();

  !logroDeUsuario
    ? res.status(400).send("No se pudo agregar el logro al usuario")
    : res.send(logroDeUsuario);
});

router.put("/:id", async (req, res) => {
  const logroExiste = await Logros.findOne(req.body.logro);

  logroExiste
    ? null
    : res.status(500).json({ succes: false, message: "Este logro no existe" });

  let logroDeUsuario = await LogrosDeUsuario.findByIdAndUpdate(
    req.params.id,
    {
      logo: req.body.logro,
      usuario: req.body.usuario,
    },
    {
      new: true,
    }
  );

  logroDeUsuario = await logroDeUsuario.save();

  !logroDeUsuario
    ? res.status(400).send("No se pudo actualizar el logro al usuario")
    : res.send(logroDeUsuario);
});

module.exports = router;
