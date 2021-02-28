const { Usuarios } = require('../models/Usuarios');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

router.get('/', async (req, res) => {

    const listaUsuarios = await Usuarios.find();

    if (!listaUsuarios)
        return res.status(500).json({ success: false });

    res.send(listaUsuarios);
});

router.post('/', async (req, res) => {

    let crearUsuario = new Usuarios({
        logros: req.body.logros,
        nombre: req.body.nombre,
        foto: req.body.foto,
        email: req.body.email,
        fechaDeNacimiento: req.body.fechaDeNacimiento,
        contrasena: bcrypt.hashSync(req.body.contrasena, 10),
        genero: req.body.genero,
        peso: req.body.peso,
        altura: req.body.altura,
        actividadFisica: req.body.actividadFisica,
        historiaClinica: req.body.historiaClinica,
        nivelSocioeconomico: req.body.nivelSocioeconomico,
        comidaFavorita: req.body.comidaFavorita,
        comidaNoFavorita: req.body.comidaNoFavorita,
        alergiasAlimentarias: req.body.alergiasAlimentarias,
        meta: req.body.meta,
        tipoDeUsuario: req.body.tipoDeUsuario,
        extras: req.body.extras,
        desayuno: req.body.desayuno,
        colacion1: req.body.colacion1,
        comida: req.body.comida,
        colacion2: req.body.colacion2,
        cena: req.body.cena,
        desayunoAyer: req.body.desayunoAyer,
        colacion1Ayer: req.body.colacion1Ayer,
        comidaAyer: req.body.comidaAyer,
        colacion2Ayer: req.body.colacion2Ayer,
        cenaAyer: req.body.cenaAyer
    });

    crearUsuario = await crearUsuario.save();

    if (!crearUsuario)
        return res.status(400).send('No se pudo crear el usuario :c');

    res.send(crearUsuario);
});

module.exports = router;