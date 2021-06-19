const Alimentos = require("../models/Alimentos");
const RegistroDietetico = require("../models/RegistroDietetico");
const Usuarios = require("../models/Usuarios");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const registroDietetico = await RegistroDietetico.find();

  !registroDietetico
    ? res.status(500).json({ success: false })
    : res.send(registroDietetico);
});

router.get("/:id", async (req, res) => {
  const registroDieteticoDeUsuario = await RegistroDietetico.findById(
    req.params.id
  );

  !registroDieteticoDeUsuario
    ? res.status(500).json({
        success: false,
        message: "El usuario aún no tiene registros dietéticos",
      })
    : res.send(registroDieteticoDeUsuario);
});

router.post("/", async (req, res) => {
  const usuario = await Usuarios.findById(req.body.idUsuario);
  !usuario ? res.status(400).send("Usuario inválido / requerido") : null;

  const alimento = await Alimentos.findBydId(req.body.idAlimennto);
  !alimento ? res.status(400).send("Alimento no encontrado") : null;

  const nuevoRegistro = new RegistroDietetico({
    idUsuario: req.body.id,
    agua: req.body.agua,
    ejercicio: req.body.ejercicio,
    alimentos: req.body.alimentos,
  });

  nuevoRegistro = await nuevoRegistro.save();

  !nuevoRegistro
    ? res.status(400).send("No se pudo crear el registro de usuario :c")
    : res.send(nuevoRegistro);
});

router.put("/:id", async (req, res) => {
  let registro = await RegistroDietetico.findByIdAndUpdate(req.params.id, {
    idUsuario: req.body.id,
    agua: req.body.agua,
    ejercicio: req.body.ejercicio,
    alimentos: req.body.alimentos,
  });

  registro = await registro.save();

  !registro
    ? res.status(400).send("Algo salió mal, no se pudo editar el registro.")
    : res.send(registro);
});

module.exports = router;
