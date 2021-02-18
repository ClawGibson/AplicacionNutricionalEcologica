const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const dbname = 'AppNutricionalEcologica';

require('dotenv/config')
const {
    API_URL,
    PORT,
    MONGODB
} = process.env

// middlewares
app.use(bodyParser.json())
app.use(morgan('tiny'))

// routes

mongoose
    .connect(MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: dbname
    })
    .then(() => {
        console.log(`Succefully connected to database ${dbname}`)
    })
    .catch(err => {
        console.log(err)
    })

app.listen(PORT || 4000, () => {
    console.log(`Server running at ${PORT || 4000}`)
})