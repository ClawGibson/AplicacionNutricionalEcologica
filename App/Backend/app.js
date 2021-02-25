const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const grupoAlimentosRoute = require('./routes/grupoAlimentos.routes');
const alimentosRoute = require('./routes/alimentos.routes');
const subGrupoAlimentosRoute = require('./routes/subGrupoAlimentos.routes');
const recetasRoute = require('./routes/recetas.routes');

require('dotenv/config')
const {
    API_URL,
    PORT,
    MONGODB,
    DBNAME
} = process.env

// middlewares
app.use(express.json())
app.use(morgan('tiny'))

// routes
app.use(`${API_URL}/alimentos`, alimentosRoute);
app.use(`${API_URL}/grupoAlimentos`, grupoAlimentosRoute);
app.use(`${API_URL}/subGrupoAlimentos`, subGrupoAlimentosRoute);
app.use(`${API_URL}/recetas`, recetasRoute);

mongoose
    .connect(MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: DBNAME,
        useFindAndModify: false
    })
    .then(() => {
        console.log(`Succefully connected to database ${DBNAME}`)
    })
    .catch(err => {
        console.log(err)
    })

app.listen(PORT || 4000, () => {
    console.log(`Server running at ${PORT || 4000}`)
})

