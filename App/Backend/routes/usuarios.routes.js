const { Usuarios } = require('../models/Usuarios');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {

    const listaUsuarios = await Usuarios.find().select('-contrasena');

    if (!listaUsuarios)
        return res.status(500).json({ success: false });

    res.send(listaUsuarios);
});

router.get('/:id', async (req, res) => {
    const usuario = await Usuarios.findById(req.params.id).select('-contrasena');

    if (!usuario)
        return res.status(500).json({ success: false, message: 'Usuario no encontrado' });
    res.send(usuario)
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

router.post('/login', async (req, res) => {

    const usuario = await Usuarios.findOne({ email: req.body.email });
    const SECRET = process.env.SECRET;

    if (!usuario) {
        return res.status(400).send('Usuario no registrado :c');
    }

    if (usuario && bcrypt.compareSync(req.body.contrasena, usuario.contrasena)) {
        const token = jwt.sign(
            {
                userId: usuario.id,
                isAdmin: usuario.esAdmin
            }, SECRET, { expiresIn: '1h' }
        )
        res.status(200).send({ usuario: usuario.email, token: token });
    } else {
        res.status(400).send('Contraseña incorrecta');
    }
});

router.post('/register', async (req, res) => {

    let registrarUsuario = new Usuarios({
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

    registrarUsuario = await registrarUsuario.save();

    if (!registrarUsuario)
        return res.status(400).send('No se pudo crear el usuario :c');

    res.send(registrarUsuario);
})

router.put('/:id', async (req, res) => {

    let editarUsuario = await Usuarios.findOneAndUpdate(req.params.id, {
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

    editarUsuario = await editarUsuario.save();

    if (!editarUsuario)
        return res.status(400).send('No se pudo editar el usuario :c');

    res.send(editarUsuario);
});
module.exports = router;