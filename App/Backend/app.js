const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const alimentosRoute = require('./routes/alimentos.routes')

require('dotenv/config')
const {
    API_URL,
    PORT,
    MONGODB,
    DBNAME
} = process.env

// middlewares
app.use(bodyParser.json())
app.use(morgan('tiny'))

// routes
app.use(`${API_URL}/alimentos`, alimentosRoute);

mongoose
    .connect(MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: DBNAME
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